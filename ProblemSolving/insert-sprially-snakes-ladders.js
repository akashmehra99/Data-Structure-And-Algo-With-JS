// insert-sprially-snakes-ladders.js

// To generate a spiral array like snakes and ladders game

function generateSprial(rows, col) {
  let matrix = [],
    num = 1;

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = num++;
    }
  }
  for (let i = 1; i < rows; i = i + 2) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
}

console.log('10 X 10 Spriral Snakes & Ladders ->' , generateSprial(10, 10));
console.log('5 X 5 Spriral Snakes & Ladders ->' , generateSprial(5, 5));
