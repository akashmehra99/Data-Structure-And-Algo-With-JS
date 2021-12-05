class Subject {
  constructor() {
    this.callbacks = [];
  }

  subscribe(fn) {
    if (typeof fn !== "function") {
      throw new Error("observer is not a valid function");
    }
    this.callbacks.push(fn);
  }

  next(data) {
    this.callbacks.forEach((fn) => fn(data));
  }

  unsubscribe() {
    this.callbacks = [];
  }
}

// Usage

const subject = new Subject();

const observer1 = (data) => data * 2;

const observer2 = (data) => data * 4;

const observer3 = (data) => data * 6;

subject.subscribe((data) => console.log(observer1(data)));
subject.subscribe((data) => console.log(observer2(data)));
subject.subscribe((data) => console.log(observer3(data)));

subject.next(4);

subject.unsubscribe();

subject.next(3);
