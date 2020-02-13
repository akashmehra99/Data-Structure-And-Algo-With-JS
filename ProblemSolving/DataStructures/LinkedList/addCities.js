const linkedList = require('./linkedList');

let cities = new linkedList();
cities.insert('Allahabad', 'head');
cities.insert('Lucknow', 'Allahabad');
cities.insert('Kanpur', 'Lucknow');
cities.insert('Delhi', 'Kanpur');
cities.insert('Meerut', 'Delhi');
cities.display();
cities.display();
console.log('Desired Node -> ', cities.advance(2));