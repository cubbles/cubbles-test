(function() {
    'use strict';
    /**
     * Get help:
     * > Lifecycle callbacks:
     * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
     *
     * Access the Cubbles-Component-Model:
     * > Access slot values:
     * slot 'a': this.getA(); | this.setA(value)
     */
    CubxPolymer({
        is: 'basic-elementary',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            this.scopeSubtree(this.root, true);

        },
        cubxReady: function() {
            this.showRuntimeId();
        },
        showRuntimeId: function() {
            console.log('this.getRuntimeId()', this.getRuntimeId());
            if (this.getRuntimeId()) {
                var p = document.createElement('p');
                p.innerHTML = '<b>runtimeId</b><br>' + this.getRuntimeId();
                var h1 = Polymer.dom(this.root).querySelector('h1');
                Polymer.dom(this.root).insertBefore(p, h1.nextElementSibling);

            } else {
                console.log('no runtimeId found');
            }
        },

        /**
         *  Observe the Cubbles-Component-Model: If value for slot 'slotA' has changed ...
         */
        modelMessageChanged: function(newValue) {
        }
    });
}());
