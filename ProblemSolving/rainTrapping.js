const findWater = (waterArr) => {
  const arrLength = waterArr.length;
  let result = 0,
    left_max = 0,
    right_max = 0;
  let start = 0,
    end = arrLength - 1;

  while (start <= end) {
    if (waterArr[start] < waterArr[end]) {
      if (waterArr[start] > left_max) {
        // update max in left
        left_max = waterArr[start];
      } else {
        // water on curr element =
        // max - curr
        result += left_max - waterArr[start];
      }
      start++;
    } else {
      if (waterArr[end] > right_max) {
        // update right maximum
        right_max = waterArr[end];
      } else {
        result += right_max - waterArr[end];
        end--;
      }
    }
  }
  return result;
};

const water1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const water2 = [3, 0, 0, 2, 0, 4];

console.log(findWater(water1));
console.log(findWater(water2));
