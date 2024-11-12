// Creating an LRU cache

class LRU {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  get(key) {
    let item = this.cache.get(key);
    if (item !== undefined) {
      // refresh key
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.maxSize) {
      this.cache.delete(this.getFirst());
    }
    this.cache.set(key, value);
  }

  getFirst() {
    return this.cache.keys().next().value;
  }
}

let cache = new LRU(3);

[1, 2, 3, 4, 5].forEach((v) => cache.set(v, `v: ${v}`));

console.log(cache.get(2)); // undfined

cache.set(6, 6);

console.log(cache.get(4)); // v: 4

console.log(cache.get(6)); // 6

cache.set(7, 7);

console.log(cache.get(5)); // undfined

console.log(cache.get(6)); // 6
