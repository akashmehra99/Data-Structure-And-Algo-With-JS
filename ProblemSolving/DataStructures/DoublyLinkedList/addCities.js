const doublyLinkedList = require('./doublyLinkedList');

let cities = new doublyLinkedList();

cities.insert('Allahabad', 'head');
cities.insert('Kanpur', 'Allahabad');
cities.insert('Lucknow', 'Kanpur');
cities.insert('New Delhi', 'Lucknow');

console.log("Values in reverse order");
cities.displayReverse();

console.log('Values');
cities.display();

console.log('Removing Kanpur');
cities.remove('Kanpur');
cities.display();

