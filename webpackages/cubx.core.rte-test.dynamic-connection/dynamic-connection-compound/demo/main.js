/* globals findAncestorElement,elementFindByAttributeValue*/
(function() {
    'use strict';
    document.addEventListener('cifReady', function() {
        document.querySelector('dynamic-connection-compound').classList.add('row');
        document.querySelector('container-element').classList.add('col-md-6');
        document.querySelector('transportable-element').classList.add('col-md-6');
        makeToDropzone(document.querySelector('dynamic-connection-compound'));
    });
    function makeToDropzone(elem) {
        console.log('makeToDropzone', elem);
        elem.handleDragEnter = function(e) {
            if (e.target === elem) {
                if (elem.classList.contains('layer_not_over')) {
                    elem.classList.remove('layer_not_over');
                }
                elem.classList.add('layer_over');
            }
        };
        elem.handleDragOver = function(e) {
            //console.log('dynamic-connection-compound:dragover', e.target);
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
        };
        elem.handleDragLeave = function(e) {
            //console.log('---------dynamic-connection-compound:dragleave', e.target);
            if (e.target === elem) {
                if (elem.classList.contains('layer_over')) {
                    elem.classList.remove('layer_over');
                }
                elem.classList.add('layer_not_over');  // this / e.target is previous target element.
            }
        };
        elem.handleDragEnd = function(e) {
            console.log('xxxxxxxxxxxxdynamic-connection-compound:dragend', e.target);

            if (elem.classList.contains('layer_over')) {
                elem.classList.remove('layer_over');
            }
            elem.classList.add('layer_not_over');  // this / e.target is previous target element.

        };
        elem.handleDrop = function(e) {
            console.log('############drop in compound');
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
                var runtimeId = e.dataTransfer.getData('runtimeId');
                var me = e.target;
                var host = findAncestorElement(me, 'dynamic-connection-compound');
                if (!host) {
                    throw new Error('parent "dynamic-connection-compound" not found.');
                }
                //console.log('container-element:drop:host', host);
                var draggedEl = elementFindByAttributeValue('runtime-id', runtimeId);
                // console.log('me.contains(draggedEl)', me.contains(draggedEl));
                host.appendChild(draggedEl);
                if (draggedEl.connectedWithId) {
                    draggedEl.removeDynamicConnection(draggedEl.connectedWithId);
                }
                delete draggedEl.connectedWithId;
            }
            return false;
        };
        elem.addEventListener('dragenter', elem.handleDragEnter);
        elem.addEventListener('dragover', elem.handleDragOver);
        elem.addEventListener('dragleave', elem.handleDragLeave);
        elem.addEventListener('dragend', elem.handleDragEnd);
        elem.addEventListener('drop', elem.handleDrop);
    }
}());
