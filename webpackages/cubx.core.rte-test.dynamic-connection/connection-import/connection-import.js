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
        is: 'connection-import',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            // set value-attribute of element with id='slota' to the initial value of slot 'a'

        },
        modelConnectionsChanged: function(newValue) {
            console.log(JSON.parse(newValue));
            this.$.output.value = JSON.stringify(JSON.parse(newValue), null, 4);
        },
        modelTriggerImportChanged: function(newValue) {
            if(newValue) {
                this.importDynamicConnections(this.$.output.value);
            }
        }
    });
}());
