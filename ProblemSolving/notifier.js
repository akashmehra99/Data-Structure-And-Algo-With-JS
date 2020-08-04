/*
Write a Notifier class that supports the following operations:

1. Constructor.

var notifier = new Notifier();

2. Listening to events.

var listenerJohn = notifier.on('MY_EVENT', function (action, item) {
  console.log(`John is ${action} ${item}`);
});
var listenerJane = notifier.on('MY_EVENT', function (action, item) {
  console.log(`Jane is ${action} ${item}`);
});

3. Triggering of events.

This particular example should lead to both callbacks
above being invoked with 'eating' and 'a burger' as parameters:

notifier.trigger('MY_EVENT', 'eating', 'a burger);
Should see the following in the console:
John is eating a burger
Jane is eating a burger

4. Unsubscribing a listener from existing events.
Note that `off` is not a method on `Notifier`.

`listenerJohn` is the reference returned by `on` above.

listenerJohn.off();
notifier.trigger('MY_EVENT', 'eating', 'a burger');
Only Jane's callback is invoked.
Jane is eating a burger

*/


class Notifier {
    constructor() {
        this.event = {};
        this.id = 0;
    }

    on(event, callBackFn) {
        if (!this.event.hasOwnProperty(event)) {
            this.event[event] = [];
            this.event[event].push({ cb: callBackFn, id: this.id, event });
        } else {
            this.event[event].push({ cb: callBackFn, id: this.id, event });
        }
        this.id++;
        let self = this;
        return {
            off: function off() {
                self.event[this.event] = self.event[this.event].filter((e) => e.id !== this.id);
            },
            id: this.id - 1,
            event: event
        }
    }

    trigger(event, action, item) {
        if (this.event.hasOwnProperty(event)) {
            this.event[event].forEach((obj) => {
                obj.cb.call(this, action, item);
            });
        }
    }
}

var notifier = new Notifier();


var listenerJohn = notifier.on('MY_EVENT', function (action, item) {
  console.log(`John is ${action} ${item}`);
});
var listenerJane = notifier.on('MY_EVENT', function (action, item) {
  console.log(`Jane is ${action} ${item}`);
});

notifier.trigger('MY_EVENT', 'eating', 'a burger');

listenerJane.off();

notifier.trigger('MY_EVENT', 'eating', 'a burger');

