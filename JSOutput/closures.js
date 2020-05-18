// 1

let a = 10;

function outer() {
    let a = 20;
    console.log(a);
}

outer();


function outer (a) {
    function inner (c) {
        return console.log(a, c);
    }
    return inner;
}

let b = outer(a);
console.log('b() ->', b(c));

var c = 15;