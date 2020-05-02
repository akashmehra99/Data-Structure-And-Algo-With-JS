// isPalindrome.js

// To check if the given list is palindrome or not.

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

    insert(value) {
        const node = new Node (value);
        if (!this.head) {
            this.head = node;
        } else {
            let p = this.head;
            while (p.next) {
                p = p.next;
            }
            p.next = node;
        }
    }

    reverseClone(head) {
        let list = null;
        let prev = null, current = head, next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        list = prev;
        return list;
    }
}

function isListPalindrome(list1, list2) {
    while (list1 && list2) {
        if (list1.data != list2.data) {
            return false;
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    return true;
}

let list = new List();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(2);
list.insert(4);

let rList = new List();
rList.head = list.reverseClone(list.head);

console.log(rList, list);
console.log('Is Palindrome -> ', isListPalindrome(list.head, rList.head));