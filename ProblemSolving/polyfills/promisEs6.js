class MyPromise {
  constructor(executerFn) {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.thenFns = [];
    this.catchFn = null;
    this.resolvedData = null;
    this.PROMISE_STATES = {
      PENDING: "PENDING",
      RESOLVED: "RESOLVED",
      REJECTED: "REJECTED",
    };
    this.state = this.PROMISE_STATES.PENDING;
    executerFn(this.resolve, this.reject);
  }

  resolve(resolvedData) {
    if (this.state === this.PROMISE_STATES.PENDING) {
      this.resolvedData = resolvedData;
      while (this.thenFns.length) {
        const thenFn = this.thenFns.shift();
        this.resolvedData = thenFn.call(this, this.resolvedData || resolvedData);
      }
    }
    this.state = this.PROMISE_STATES.RESOLVED;
    return this.resolvedData;
  }

  reject(rejectData) {
    if (this.state === this.PROMISE_STATES.PENDING) {
      this.catchFn.call(this, rejectData);
    }
    this.state = this.PROMISE_STATES.REJECTED;
  }

  then(fn) {
    fn && this.thenFns.push(fn);
    return this;
  }

  catch(fn) {
    this.catchFn = fn;
    return this;
  }
}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

p1.then((data) => data * 2)
.then((data) => data * 3)
.then()
.then((data) => console.log("Data from promise -> ", data)).catch((error) =>
  console.error("Error from promise => ", error)
);
