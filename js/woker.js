// This needs to be global, so stop meassages can effect it.
var feed_timer;

// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {

    // console.log(e.data);
    // console.log(e.data.pos + ' | ' + e.data.speed);
    console.log(e.data.stopped);

    let num = parseFloat(e.data.pos).toFixed(3);
    let speed = parseFloat(e.data.speed).toFixed(3);

    if (e.data.stopped === 1) {
        clearInterval(feed_timer);
        self.close();
    } else {
        feed_timer = setInterval(frame.bind(this), 15);
    }

    function frame() {
        if ((num < -100) || (e.data.stopped === 1)) {
            self.postMessage(num);
            clearInterval(feed_timer);
        } else {
            // TODO
            // CHECK DIRECTION WOULD GO HERE
            num = (num - speed);
            self.postMessage(num);
        }
    }


}, false);