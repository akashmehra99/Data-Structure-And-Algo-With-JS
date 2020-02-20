class Dictionary {

    constructor() {
        this.dataStore = new Array();
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        delete this.dataStore[key];
    }

    showAll() {
        for (let key in Object.keys(this.dataStore)) {
            console.log(key, '->', this.dataStore[key]);
        }
    }

    count() {
        let n = 0;
        for (let keys in Object.keys(this.dataStore)) {
            n++;
        }
        return n;
    }

    clear() {
        for (let keys in Object.keys(this.dataStore)) {
            delete this.dataStore[key];
        }
    }
}