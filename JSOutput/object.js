let obj2 = {
    fname: 'Akash',
    lname: 'Mehra',
    fullName: () => `${this.fname} ${this.lname}` 
};

console.log('obj2 :', obj2.fullName()); // undefined undefined

let obj1 = {
    fname: 'Akash',
    lname: 'Mehra',
    fullName: () => `${obj1.fname} ${obj1.lname}` 
};

console.log('obj1 :', obj1.fullName()); // Akash Mehra

console.log('Creating Singleton Object in ES5');

const singleton = (function() {
    let instance;
    const createInstance = () => {
        const obj = new Object('I am the new instance');
        return obj;
    };

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        } 
    }

})();

const instance1 = new singleton.getInstance();
const instance2 = new singleton.getInstance();

console.log(instance1 === instance2); // true


console.log('Creating Singleton Object in ES6');

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    } 
}

const ins1 = new Singleton();
const ins2 = new Singleton();

console.log(ins1 === ins2); // true