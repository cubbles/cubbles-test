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
            console.log('container-element: cubxReady');
            if (this.parentNode && this.parentNode.isCompoundComponent) {
                this.makeToDropzoneToParentCompound(this.parentNode, this);
            }
            this.handleButtonVisibility(this.getButtons());
        },

        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelMessageChanged: function(newValue) {
            // do nothing
        },
        modelButtonsChanged: function(newValue) {
            this.handleButtonVisibility(newValue);
        },

        handleButtonVisibility: function(visible) {
            console.log('handleButtonVisibility', visible);
            if (visible && this.$.buttons.classList.contains('hidden')) {
                this.$.buttons.classList.remove('hidden');
            } else if (!visible && !this.$.buttons.classList.contains('hidden')) {
                this.$.buttons.classList.add('hidden');
            }
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
            var connectionId = this.addDynamicConnection(dynamicConnection);
            draggedElement.connectedWithId = connectionId;
        },
        getNewConnectionId: function() {
            var counter = this.get('connectionIdCounter');
            if (!counter) {
                counter = 0;
            }
            this.set('connectionIdCounter', ++counter);
            var connectionId = 'connection' + String(counter);
            return connectionId;

        },
        handleEnter: function(event) {
            if (event.keyCode === 13) {
                var host = findAncestorElement(event.target,'container-element');
                host.setMessage(event.target.value);
            }
        },

        makeToDropzoneToParentCompound: function(parentElem, elem) {

            //console.log('makeToDropzone', parentElem);
            parentElem.handleDragEnter = function(e) {
                if (e.target === parentElem) {
                    if (parentElem.classList.contains('layer_not_over')) {
                        parentElem.classList.remove('layer_not_over');
                    }
                    parentElem.classList.add('layer_over');
                }
            };
            parentElem.handleDragOver = function(e) {
                //console.log('dynamic-connection-compound:dragover', e.target);
                if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                }
                e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
                return false;
            };
            parentElem.handleDragLeave = function(e) {
                //console.log('---------dynamic-connection-compound:dragleave', e.target);
                if (e.target === parentElem) {
                    if (parentElem.classList.contains('layer_over')) {
                        parentElem.classList.remove('layer_over');
                    }
                    parentElem.classList.add('layer_not_over');  // this / e.target is previous target element.
                }
            };
            parentElem.handleDragEnd = function(e) {
                //console.log('xxxxxxxxxxxxdynamic-connection-compound:dragend', e.target);

                if (parentElem.classList.contains('layer_over')) {
                    parentElem.classList.remove('layer_over');
                }
                parentElem.classList.add('layer_not_over');  // this / e.target is previous target element.

            };
            parentElem.handleDrop = function(e) {
                //console.log('############drop in compound');
                if (e.stopPropagation) {
                    e.stopPropagation(); // stops the browser from redirecting.
                    var runtimeId = e.dataTransfer.getData('runtimeId');
                    var me = e.target;
                    console.log('handleDrop:me', me);
                    //var host = findAncestorElement(me, me.parentNode.tagName);
                    //if (!host) {
                    //    throw new Error('parent "' + me.parentNode.tagName + '" not found.');
                    //}
                    //console.log('container-element:drop:host', host);
                    var draggedEl = elementFindByAttributeValue('runtime-id', runtimeId);
                    // console.log('me.contains(draggedEl)', me.contains(draggedEl));
                    //console.log('host',host);
                    console.log('me.children', me.children);

                    var childElem = me.lastElementChild;
                    while (childElem !== me.firstElementChild && childElem.tagName !== draggedEl.tagName) {
                        childElem = childElem.previousElementSibling;
                    }
                    console.log('childElem', childElem);
                    if (childElem.tagName === draggedEl.tagName && childElem !== me.lastElem) {

                        me.insertBefore(draggedEl, childElem.nextElementSibling);
                    } else if (childElem.tagName === draggedEl.tagName && childElem == me.lastElem) {
                        me.appendChild(draggedEl);
                    } else if (childElem.tagName !== draggedEl.tagName && me.lastChild !== elem) {
                        me.insertBefore(draggedEl, elem.nextSibling);
                    } else {
                        me.appendChild(draggedEl);
                    }
                    if (draggedEl.connectedWithId) {
                        draggedEl.removeDynamicConnection(draggedEl.connectedWithId);
                    }
                    delete draggedEl.connectedWithId;
                }
                return false;
            };
            parentElem.addEventListener('dragenter', parentElem.handleDragEnter);
            parentElem.addEventListener('dragover', parentElem.handleDragOver);
            parentElem.addEventListener('dragleave', parentElem.handleDragLeave);
            parentElem.addEventListener('dragend', parentElem.handleDragEnd);
            parentElem.addEventListener('drop', parentElem.handleDrop);
        },

        exportHandler: function() {
            var exportData = this.exportDynamicConnections();
            console.log(exportData);
            this.setConnections(exportData);

        },
        importHandler: function() {
            this.setTriggerImport(true);
        },
        deleteHandler: function() {
            var exportData = this.exportDynamicConnections();
            var exportList = JSON.parse(exportData);
            for (var index in exportList) {
                var item = exportList[index];
                this.removeDynamicConnection(item);
            }
        }

    });
}());
