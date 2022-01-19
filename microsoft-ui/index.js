const resultsSection = document.getElementById("resultsSection");

function loadResults() {
  fetchData()
    .then(generateHTML)
    .catch((error) => {
      console.log("Error from API -> ", error);
      resultsSection.innerHTML = "";
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = "Not able to fetch Data";
      resultsSection.appendChild(errorDiv);
    });
}

function generateHTML(data) {
  console.log(data);
  data.sort(
    (a, b) =>
      new Date(b.dateTimeLastModified).getTime() -
      new Date(a.dateTimeLastModified).getTime()
  );
  pagination = new Pagination(data, 5);
  generateTemplate(pagination.display(1));
}

function generateTemplate(data) {
  resultsSection.innerHTML = "";
  const successHTML = document.createElement("div");
  if (data.length) {
    data.forEach((element) => {
      console.log();
      const elm = document.createElement("div");
      elm.id = element.id;
      elm.classList.add("result");
      const heading = document.createElement("div");
      heading.classList.add("resultHeading");
      const date = new Date(element.dateTimeLastModified);
      const today = isToday(date);
      const dateToDisplay = today
        ? `${date.getHours()}: ${date.getMinutes()}`
        : [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/") +
          " " +
          [date.getHours(), date.getMinutes()].join(":");
      heading.innerHTML = `${element.from.name} ${element.type} ${dateToDisplay}`;
      const fullText = document.createElement("div");
      fullText.innerHTML = element.fullText;
      elm.appendChild(heading);
      elm.appendChild(fullText);
      successHTML.appendChild(elm);
    });
  }
  resultsSection.appendChild(successHTML);
}

function isToday(someDate) {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
}

function Pagination(pageEleArr, numOfEleToDisplayPerPage) {
  this.pageEleArr = pageEleArr;
  this.numOfEleToDisplayPerPage = numOfEleToDisplayPerPage;
  this.elementCount = this.pageEleArr.length;
  this.numOfPages = Math.ceil(
    this.elementCount / this.numOfEleToDisplayPerPage
  );
  const pageElementsArr = function (arr, eleDispCount) {
    const arrLen = arr.length;
    const noOfPages = Math.ceil(arrLen / eleDispCount);
    let pageArr = [];
    let perPageArr = [];
    let index = 0;
    let condition = 0;
    let remainingEleInArr = 0;

    for (let i = 0; i < noOfPages; i++) {
      if (i === 0) {
        index = 0;
        condition = eleDispCount;
      }
      for (let j = index; j < condition; j++) {
        perPageArr.push(arr[j]);
      }
      pageArr.push(perPageArr);
      if (i === 0) {
        remainingEleInArr = arrLen - perPageArr.length;
      } else {
        remainingEleInArr = remainingEleInArr - perPageArr.length;
      }

      if (remainingEleInArr > 0) {
        if (remainingEleInArr > eleDispCount) {
          index = index + eleDispCount;
          condition = condition + eleDispCount;
        } else {
          index = index + perPageArr.length;
          condition = condition + remainingEleInArr;
        }
      }
      perPageArr = [];
    }
    return pageArr;
  };
  this.display = function (pageNo) {
    if (pageNo > this.numOfPages || pageNo <= 0) {
      return -1;
    } else {
      console.log("Inside else loop in display method");
      console.log(
        pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)
      );
      console.log(
        pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)[
          pageNo - 1
        ]
      );
      return pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)[
        pageNo - 1
      ];
    }
  };
}

async function fetchData() {
  const res = await fetch("https://61e500bf595afe00176e526b.mockapi.io/search");
  const data = await res.json();
  return data;
}

loadResults();
var pagination,
  pageNo = 1;

var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var pageNoElm = document.getElementById("pageNo");

prevBtn.addEventListener("click", () => {
  if (pageNo > 1) {
    pageNo--;
    generateTemplate(pagination.display(pageNo));
    pageNo.innerHTML = pageNo;
  } else {
    return;
  }
});

nextBtn.addEventListener("click", () => {
  if (pageNo < pagination.numOfPages) {
    pageNo++;
    generateTemplate(pagination.display(pageNo));
    pageNo.innerHTML = pageNo;
  } else {
    return;
  }
});
