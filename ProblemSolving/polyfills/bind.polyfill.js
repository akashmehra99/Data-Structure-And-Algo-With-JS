if (!Function.prototype.bind) {
    (function() {
        var slice = Array.prototype.slice;
        Function.prototype.bind  = function() {
            var thatFunction = this, thatArg = arguments[0];
            var args = slice.call(arguments,1);
            if (typeof thatFunction !== 'function') {
                throw new TypeError('Function.prototype.bind - What is trying to be bound is not callabale');
            }
            return function(){
                var functionArgs = args.concat(slice.call(arguments));
                return thatFunction.apply(thatArg, functionArgs);
            }
        }
    })();
}

const myBind = function() {
    let context = this,
      funcBindObj = arguments[0];
    let params = arguments.slice(1);
    return function(...args) {
      context.apply(funcBindObj, [...params, ...args]);
    };
  };