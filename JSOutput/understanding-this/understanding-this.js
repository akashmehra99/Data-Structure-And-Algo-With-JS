// Reference -> https://towardsdatascience.com/javascript-context-this-keyword-9a78a19d5786

// Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code or the function where it’s looked at.

console.log('this refers to window object ->', this);

// Context globally inside a function

console.log('Context globally inside a function');

function foo() {
    console.log(this);
}

console.log('foo() ->', foo());
console.log('window.foo() ->', window.foo());

// Changing global this to point to foo object
// Note: new operator creates an instance of an object. Context of the function will be set to the created instance of an object.

console.log('new foo() ->', new foo());


// Context — under 2nd level function

var x = {
    fn: function() {
        return this;
    },
    y: {
        fn: function() {
            return this;
        }
    }
}

console.log('x.fn() === x ->', x.fn() === x);
console.log('x.y.fn() === x ->', x.y.fn() === x);
console.log('x.y.fn() === x.y ->', x.y.fn() === x.y);


// Context — when the function is defined globally and used under an object (Implicit Binding).

function func() {
    return this;
}

var obj = {
    method: func
};

console.log('obj.method() === obj -> ', obj.method() === obj);
console.log('obj.method() === window -> ', obj.method() === window);

// Note: From above, we get that value of this keyword depends on the function is called upon not where the function is defined.

// When using use strict in a function, the context i.e this keyword behaves differently. Context remains whatever it was called upon.

function strictFun() {
    'use strict';
    return this;
}

var strictObj = {
    method: strictFun
};

console.log('Using strict inside function');
console.log('strictFun() ->', strictFun());
console.log('window.strictFun() === window ->', window.strictFun() === window);
console.log('strictObj.method() === strictObj ->', strictObj.method() === strictObj);

// Note: Our entire program should probably either be strict or non-strict. However, sometimes you include a third-party library that has different Strict’ness than your own code, so care must be taken over these subtle compatibility details.



// Arrow functions work differently from regular functions in terms of context. this will always refer to the lexical scope , i.e this retains the value of the enclosing lexical context's.
console.log('Arrow functions work differently from regular functions in terms of context. this will always refer to the lexical scope , i.e this retains the value of the enclosing lexical contexts.');
const arrow = () => this;
console.log('arrow ->', arrow());


// Context follows the same rule, i.e. if the function is on an object’s prototype chain, this refers to the object the method was called on.

console.log('Context follows the same rule, i.e. if the function is on an object’s prototype chain, this refers to the object the method was called on.');

var propObj = {
    func: function() {
        return this.x;
    }
};

var newPropObj = Object.create(propObj);
newPropObj.x = 10;
console.log('newPropObj.x ->', newPropObj.x);
console.log('newPropObj.func() -> ', newPropObj.func());
console.log('propObj.func() ->', propObj.func());


// The context in case event handlers refers to the element that received the event.
console.log('The context in case event handlers refers to the element that received the event.');

// How does the context behave in an execution context?

// If you don’t know what is execution context. In short, execution context is the ‘environment’ or scope in which a function executes in. Every time a function is called, a new execution context is created. Every call to an execution context has 2 stages

// Creation — when the function is called
// Activation — when the function is executed

// The value of this is determined at creation phase, not at the time of execution. However, this determination rule remains the same.

// How is context is different from the scope?

// Scope and context are altogether a different concept but usually used by the upcoming developer interchangeably.

// The scope is the accessibility of variables, functions, or objects in some particular part of your code during runtime. Read more here about scopes.

// Every function invocation has both a scope and a context associated with it.



// How to explicitly change the context?
// We can dynamically change the context of any method by using either call() ,apply()and bind()method.

// Why do we need to explicitly change the context?

// 1. When we need to call a function defined inside an object say xbut on other objects say ywe can use explicit methods to do so, to increase reusability.
// 2. Currying and partial application is another part where explicitly change in context is used.
// 3. To make utility functions
// 4. Inheritance is another place where the explicit change of context can be used.


// What are the cases where we need to take care of context?
// We may lose the context i.e getting an undefined value for thisin
// 1. Nested Functions
// 2. Method as callback


// Note:
// 1. Creating a “bound method reference” requires an anonymous wrapper function, and a calling cost. In specific situations, leveraging closures may be a better alternative.
// 2. Any sort of function reference (assigning as a value, passing as an argument) loses the function’s original binding.