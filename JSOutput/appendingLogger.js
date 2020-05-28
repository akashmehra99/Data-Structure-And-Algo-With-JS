// To append loggeers in the function without changing the actual function
// this is for call, bind, apply and arrow functions

// 1 ->
let obj = {
    name: 'Akash',
    getName: function () {
        console.log(`${this.name} is printed`);
    }
}

function appendLogger(fn) {
    return function () {
        console.log(Date.now());
        fn.apply(this, arguments);
        console.log(Date.now());
    }
}

obj.getName = appendLogger(obj.getName);
obj.getName();


//2 ->

let obj = {
    name: 'Akash',
    getName: () => {
        console.log(`${this.name} is printed`);
    }
}

function appendLogger(fn) {
    return function () {
        console.log(Date.now());
        fn.apply(this, arguments);
        console.log(Date.now());
    }
}

obj.getName = appendLogger(obj.getName);
obj.getName();