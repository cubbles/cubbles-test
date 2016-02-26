(function() {
    'use strict';
    document.addEventListener('cifReady', function() {
        var el = document.querySelector('example-compound');
        el.addEventListener('cifModelChange', function(event) {
            console.log('!!!!!!event!!!!!!!!!!', event);
            console.log(event.target.getAttribute('runtime-id'));
            if (event.target.getAttribute('runtime-id') ===
                'cubx.rte.test.connectionhook-scenario@0.1.0-SNAPSHOT/example-compound:cubx.rte.test.' +
                'connectionhook-scenario@0.1.0-SNAPSHOT/message-viewer.first') {
                var elements = document.querySelectorAll('.message_output');
                console.log('elements', elements);
                console.log('elements instanceof Array', elements instanceof Array);
                for (var i = 0; i < elements.length; i++) {
                    var elem = elements.item(i);
                    elem.innerHTML = event.detail.payload;
                }
            }
        });
    });
}());
