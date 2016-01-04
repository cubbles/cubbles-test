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
        is: 'elementary-cubxready-method',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            // set value-attribute of element with id='slota' to the initial value of slot 'a'
            this.$.slota.setAttribute('value', this.getA());
        },
        cubxReady: function() {
            alert('cubxReady called.');
        },

        /**
         * A handler to be called by a dom-element
         * @param {event} event
         */
        inputFieldSlotAChanged: function(event) {
            // update the cubixx-model
            this.setA(event.target.value);
        },

        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelAChanged: function(newValue) {
            // update the view
            this.$.slota.setAttribute('value', newValue);
        }
    });
}());
