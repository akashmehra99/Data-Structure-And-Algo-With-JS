/*
    Find the longest word as per dictionay in a given string
*/

function isValidWord(word) {
  if (!word) {
    return false;
  }
  const validWords = [
    "a",
    "an",
    "ant",
    "antler",
    "con",
    "contain",
    "containment",
  ];

  return validWords.includes(word);
}

// start index as well as word index
function getLongestValidWord(word) {
  if (word) {
    const length = word.length;
    let startLength = 0;
    let result = "";
    while (startLength < length) {
      // Break word with start index and length
      let endIndex = startLength + 1;
      for (let i = 0; endIndex < length; i++) {
        let brokenWord = word.substring(i, endIndex);

        if (isValidWord(brokenWord)) {
          result = brokenWord;
        } else {
          endIndex++;
        }
      }
      startLength++;
    }
    return result;
  } else {
    return "Not A valid Word";
  }
}

const str = "antlerxcontainmentxyz";
console.log(getLongestValidWord(str));
