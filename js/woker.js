// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
    // Send the message back.
    //self.postMessage('You said: ' + e.data);

    console.log('whiterabbit');
    console.log(e.data);

    let num = e.data;

    while (num < 10) {
        self.postMessage('You said:' + num);
        num ++;
    }


    // obj = JSON.parse(JSON.stringify(obj));
    // parent.postMessage(obj, 'whatever');



}, false);