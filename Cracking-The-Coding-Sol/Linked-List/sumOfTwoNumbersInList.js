class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let p1 = this.head;
            while (p1.next) {
                p1 = p1.next;
            }
            p1.next = node;
        }
    }

    listToNumber() {
        let number = '';
        let p1 = this.head;
        while (p1.next) {
            number += p1.data;
            p1 = p1.next;
        }
        number += p1.data;
        return number;
    }

    numberToList(num) {
        let digit = [];
        while (num) {
            digit.push(num % 10);
            num = parseInt(num / 10, 10);
        }
        let list = new List();
        while (digit.length) {
            list.insert(digit.pop());
        }
        return list;
    }
}

let list_one = new List();
list_one.insert(7);
list_one.insert(1);
list_one.insert(6);

console.log('Number -> ,', list_one.listToNumber());
console.log('List -> ', list_one.numberToList(list_one.listToNumber()));