const json1 = {
  key1: "key1",
  key2: {
    key21: "key21",
    key22: {
      key221: ["key221-0", "key221-1", "key221-2"],
      key222: "key222",
    },
  },
};

const json2 = {
  key1: "key1",
  key2: {
    key21: "key21",
    key22: {
      key221: ["key221-0", "key221-1", "key221-3"],
      key222: "key222",
    },
  },
};

const json3 = {
  key1: "key1",
  key2: {
    key21: "key21",
    key22: {
      key221: "key221",
      key223: "key222Test",
    },
  },
};

console.log(diffJson(json1, json2)); // key2.key22.key222 , value mismatch

console.log(diffJson(json1, json3)); // key2.key22.key222 , missing key

function diffJson(json1, json2) {
  let valueMismatch = false,
    missingKey = false,
    pathRef = [];

  function findDiff(obj1, obj2, path) {
    const isArray1 = Array.isArray(obj1);
    const isArray2 = Array.isArray(obj2);
    // Both are array or non array
    if (isArray1 === isArray2) {
      // Type is Array
      if (isArray1) {
        if (obj1.length !== obj2.length) {
          valueMismatch = true;
        } else {
          let loopPath = "";
          for (let i = 0; i < obj1.length; i++) {
            // Object or Arrays
            loopPath = "" + i;
            if (
              (typeof obj1[i] === "object" && typeof obj2[i] === "object") ||
              (Array.isArray(obj1[i]) && Array.isArray(obj2[i]))
            ) {
              findDiff(obj1[i], obj2[i], path + loopPath);
            } else {
              // Primatiive values
              if (obj1[i] !== obj2[i]) {
                path += "-" + loopPath;
                pathRef.push(path);
                valueMismatch = true;
              }
            }
          }
        }
      } else {
        // Type is object
        for (let key in obj1) {
          let loopPath = path + "." + key;
          if (!obj2[key]) {
            missingKey = true;
            path += "." + key;
            pathRef.push(path);
          }
          if (
            (typeof obj1[key] === "object" && typeof obj2[key] === "object") ||
            (Array.isArray(obj1[key]) && Array.isArray(obj2[key]))
          ) {
            findDiff(obj1[key], obj2[key], loopPath);
          } else {
            if (obj1[key] !== obj2[key]) {
              pathRef.push(loopPath);
              valueMismatch = true;
            }
          }
        }
      }
    } else {
      // Type mismatch
      valueMismatch = true;
    }
  }

  findDiff(json1, json2, pathRef);
  return {
    valueMismatch,
    missingKey,
    path: pathRef,
  };
}
