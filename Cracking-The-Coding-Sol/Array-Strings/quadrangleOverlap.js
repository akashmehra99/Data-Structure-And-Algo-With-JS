// quadrangleOverlap.js
// To check if given points of quarrangle (square or rectangle ovelap)
// [x , y, width, height]

const points = [
    [1, 2, 5, 5],
    [1, 2, 7, 7],
    [1, 10, 7, 7]
];


function isOverlap(point1, point2) {
    const [x1, y1, w1, h1] = point1;
    const [x2, y2, w2, h2] = point2;
    const xOverlap = valueInrange(x1, x2, x2 + w2) || valueInrange(x2, x1, x1 + w1);
    const yOverlap = valueInrange(y1, y2, y2 + h2)  || valueInrange(y2, y1, y1 + h1);
    return (xOverlap && yOverlap);

}

function valueInrange(value, min, max) {
    return (value >= min) && (value <= max);
}

function checkNewPoint(pointsArray, newPoint) {
    let overlap = false;
    for (let i = 0; i < pointsArray.length; i++) {
        if (isOverlap(pointsArray[i], newPoint)) {
            overlap = true;
            break;
        }
    }
    return overlap;
}

console.log(checkNewPoint(points, [1, 1, 20, 15]));
console.log(checkNewPoint(points, [100, 1, 20, 15]));


