/* globals findAncestorElement,elementFindByAttributeValue*/
(function() {
    'use strict';

    document.addEventListener('cifReady', function() {
        console.log('main cifready');
        document.querySelector('dynamic-connection-export-import-compound').classList.add('row');

        document.querySelector('container-element').classList.add('col-md-6');
        var transpElements = document.querySelectorAll('transportable-element');
        console.log(transpElements);
        for (var index = 0; index < transpElements.length; index++) {
            var elem = transpElements[index];
            elem.classList.add('col-md-6');
        }
        document.querySelector('connection-import').classList.add('row');
    });

}());
