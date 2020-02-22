// 1 -> Will give error as setimeout is not having a call back

for (var i = 0; i <=5; i++) {
    setTimeout(console.log(i), i*1000);
}


//2 -> o/p 6 6 6 6 6 6

for (var i = 0; i <=5; i++) {
    setTimeout(function () {console.log(i)}, i*1000);
}


// 3 ->  To fix using es5 o/p 0 1 2 3 4 5

for (var i = 0; i <=5; i++) {
    (function(index) {
        setTimeout(function () {
            console.log(index)
        }, index * 100);
    })(i);
    
}

// 4 - ES6 fix 

for (let i = 0; i <=5; i++) {
    setTimeout(() => console.log(i), i*100);
}