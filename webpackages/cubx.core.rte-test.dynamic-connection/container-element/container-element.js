/* globals findAncestorElement,elementFindByAttributeValue  */
(function() {
    'use strict';
    /**
     * Get help:
     * > Lifecycle callbacks:
     * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
     *
     * Access the Cubixx-Component-Model:
     * > Access slot values:
     * slot 'a': this.getA(); | this.setA(value)
     */
    CubxPolymer({
        is: 'container-element',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            this.$.dropzone.addEventListener('dragenter', this.handleDragEnter);
            this.$.dropzone.addEventListener('dragover', this.handleDragOver);
            this.$.dropzone.addEventListener('dragleave', this.handleDragLeave);
            this.$.dropzone.addEventListener('dragend', this.handleDragEnd);
            this.$.dropzone.addEventListener('drop', this.handleDrop);

        },

        cubxReady: function() {
            if (this.parentNode && this.parentNode.isCompoundComponent) {
                this.makeToDropzoneToParentCompound(this.parentNode);
            }
        },

        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelAChanged: function(newValue) {
            // do nothing
        },
        handleDragEnter: function(e) {
            //console.log('dragenter', e.target);

            var me = e.target;

            if (me.id === 'dropzone') {
                this.classList.add('over');
                if (this.classList.contains('not_over')) {
                    this.classList.remove('not_over');
                }
            }
        },
        handleDragOver: function(e) {
            //console.log('dragover', e.target);
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
        },
        handleDragLeave: function(e) {
            //console.log('dragleave');
            var me = e.target;
            if (me.id === 'dropzone') {
                if (this.classList.contains('over')) {
                    this.classList.remove('over');  // this / e.target is previous target element.
                }
                this.classList.add('not_over');
            }
        },
        handleDragEnd: function(e) {
            //console.log('dragend');
            if (this.classList.contains('over')) {
                this.classList.remove('over');  // this / e.target is previous target element.
            }
            this.classList.add('not_over');
        },
        handleDrop: function(e) {
            var me = e.target;
            if (e.stopPropagation) {
                e.stopPropagation();
                if (me.id === 'dropzone') {

                    var runtimeId = e.dataTransfer.getData('runtimeId');

                    var host = findAncestorElement(me, 'container-element');
                    if (!host) {
                        throw new Error('parent "container-element" not found.');
                    }
                    //console.log('container-element:drop:host', host);
                    var draggedEl = elementFindByAttributeValue('runtime-id', runtimeId);
                    me.appendChild(draggedEl);
                    host.createConnectionTo(draggedEl);

                }
            }
            return false;
        },

        createConnectionTo: function(draggedElement) {
            var dynamicConnection = new window.cubx.cif.DynamicConnection();
            dynamicConnection.setSourceRuntimeId(this.getAttribute('runtime-id'));
            dynamicConnection.setSourceSlot('message');
            dynamicConnection.setDestinationRuntimeId(draggedElement.getAttribute('runtime-id'));
            dynamicConnection.setDestinationSlot('message');
            var connectionId = 'autoconnected1';
            dynamicConnection.setConnectionId(connectionId);
            this.addDynamicConnection(dynamicConnection);
            draggedElement.connectedWithId = connectionId;
        },
        handleEnter: function(event) {
            if (event.keyCode === 13) {
                event.target.blur();
            }
        },

        makeToDropzoneToParentCompound: function(elem) {
            //console.log('makeToDropzone', elem);
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
                //console.log('xxxxxxxxxxxxdynamic-connection-compound:dragend', e.target);

                if (elem.classList.contains('layer_over')) {
                    elem.classList.remove('layer_over');
                }
                elem.classList.add('layer_not_over');  // this / e.target is previous target element.

            };
            elem.handleDrop = function(e) {
                //console.log('############drop in compound');
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

    });
}());
