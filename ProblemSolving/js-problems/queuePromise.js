const sendRequest = (str) => {
  console.log(str);
  return new Promise((res) => {
    setTimeout(() => res(`Result is ${str}`), Math.random() * 3000);
  });
};

const makeRequests = (urlsArr = [], maxConcurrent = 2) => {
  return new Promise((resolve) => {
    let noOfPromsies = urlsArr.length;
    let inProgress = 0;
    let startIndex = 0;
    let promiseMap = new Map();

    const queuePromise = (arr = [], maxConcurrent = 2) => {
      if (noOfPromsies === 0) {
        const results = [];
        arr.forEach((url) => results.push(promiseMap.get(url)));
        resolve(results);
      }
      while (startIndex < arr.length && inProgress < maxConcurrent) {
        let index = startIndex;
        if (!promiseMap.has(arr[index])) {
          promiseMap.set(
            arr[index],
            sendRequest(arr[index])
              .then((data) => {
                promiseMap.set(arr[index], data);
                inProgress--;
                noOfPromsies--;
                queuePromise(urlsArr, maxConcurrent);
              })
              .catch((err) => {
                promiseMap.set(arr[index], JSON.stringify(err));
                startIndex++;
                noOfPromsies--;
                queuePromise(urlsArr, maxConcurrent);
              })
          );
        } else {
          noOfPromsies--;
        }
        startIndex++;
        inProgress++;
      }
    };
    queuePromise(urlsArr, maxConcurrent);
  });
};

makeRequests(["url1", "url2", "url3", "url1", "url4"], 2).then((result) => {
  console.log(result); // [Result is url1, Result is url2, Result is url3, Result is url1, Result is url4]
});

// More generic solution

const rateLimiter = (tasks, maxConcurrent = 2) => {
  return new Promise((resolve, reject) => {
    let taskIndex = 0;
    let activeTasks = 0;
    const results = [];
    const errors = [];

    const executeTask = () => {
      if (taskIndex >= tasks.length && activeTasks === 0) {
        if (errors.length > 0) {
          reject({ results, errors });
        } else {
          resolve(results);
        }
        return;
      }

      while (activeTasks < maxConcurrent && taskIndex < tasks.length) {
        const currentIndex = taskIndex;
        const task = tasks[currentIndex];
        taskIndex++;
        activeTasks++;

        task()
          .then((result) => {
            results[currentIndex] = result;
          })
          .catch((error) => {
            errors[currentIndex] = error;
          })
          .finally(() => {
            activeTasks--;
            executeTask();
          });
      }
    };

    executeTask();
  });
};

// Example Usage:
const createTask = (id) => () => {
  console.log(`Task ${id} started`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) reject(`Task ${id} failed`);
      else resolve(`Task ${id} completed`);
    }, Math.random() * 3000);
  });
};

const tasks = [
  createTask(1),
  createTask(2),
  createTask(3),
  createTask(4),
  createTask(5),
  createTask(6),
];

rateLimiter(tasks, 3)
  .then((results) => {
    console.log("All tasks completed successfully:", results);
  })
  .catch(({ results, errors }) => {
    console.log("Some tasks failed:", { results, errors });
  });
