class Lazy {
    constructor(name, logFn) {
        this.name = name;
        this.logFn = logFn;
        this.fnArr = [];
        this.eat = this.eat.bind(this);
        this.sleep = this.sleep.bind(this);
        this.sleepFirst = this.sleepFirst.bind(this);

        setTimeout(() => this.execute(), 0);
    }

    eat(item) {
        this.fnArr.push(['eat', item]);
        return this;
    }

    sleep(duration) {
        this.fnArr.push(['sleep', duration * 1000]);
        return this;
    }

    sleepFirst(duration) {
        this.fnArr.unshift(["sleep", duration * 1000]);
        return this;
    }

    execute() {
        if (!this.fnArr.length) return;

        const task = this.fnArr.shift();

        if (task[0] === "eat") {
            this.logFn(task[1]);
            this.execute();
        } else if (task[0] === "sleep") {
            setTimeout(() => {
                this.execute();
            }, task[1]);
        }

    }
}



const test = new Lazy("Akash", console.log).eat("1").sleep(2).eat("2").sleepFirst(4);