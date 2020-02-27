let data = {
    a: 2,
    b: 3,
    c: 4,
    d: 1
};

let condition = "((a < b) && (b > c)) || d < b";

function validate(condition, data) {
    let expression = '';
    for (let i = 0; i < condition.length; i++) {
        if (data.hasOwnProperty(condition[i])) {
            expression = expression + data[condition[i]];
        } else {
            expression = expression + condition[i];
        }
    }
    console.log('Expression :', expression);
    return eval(expression);
}

console.log(validate(condition, data));