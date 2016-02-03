/* globals _ */
(function() {
    'use strict';
    document.addEventListener('cifReady', function() {
        document.querySelector('outer-compound').classList.add('row');
        var inners = document.querySelectorAll('inner-compound');
        var count = inners.length + 1;
        if (count < 6) {
            document.querySelector('outer-compound').classList.add('row');
            var className = 'col-md-' + Math.floor(12 / count);
            _.each(inners, function(elem) {
                elem.classList.add(className);
                var div = document.createElement('div');
                var html = '<b>runtimeId</b> <br>';
                html += elem.getRuntimeId();
                div.innerHTML = html;
                elem.appendChild(div);
            });
            var div = document.createElement('div');
            var html = '<p>';
            html += '<b>runtimeId</b> <br>';
            html += document.querySelector('outer-compound').getRuntimeId();
            html += '</p>';
            div.innerHTML = html;
            div.classList.add(className);
            document.querySelector('outer-compound').appendChild(div);
        }
    });
}());
