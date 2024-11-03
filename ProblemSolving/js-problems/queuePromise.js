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
