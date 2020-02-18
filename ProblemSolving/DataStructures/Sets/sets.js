class Set {
    constructor() {
        this.dataStore = new Array();
    }

    add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    remove(data) {
        const pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }
    
    show() {
        return this.dataStore;
    }

    size() {
        this.dataStore.length;
    }

    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    }

    union(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; i++) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    
    intersect(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
    }

    subset(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (var member in this.dataStore) {
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    }

    difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
}