function getBrowserCallStack() {
    try {
        return 1 + getBrowserCallStack();
    } catch (error) {
        console.log("Call stack limit reached");
        return 1;
    }
}

console.log(getBrowserCallStack());