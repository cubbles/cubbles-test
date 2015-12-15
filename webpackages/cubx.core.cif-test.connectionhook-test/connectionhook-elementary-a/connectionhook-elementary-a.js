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
        is: 'connectionhook-elementary-a',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            // set value-attribute of element with id='slota' to the initial value of slot 'a'
            this.$.slota.setAttribute('value', this.getA());
        },

        /**
         * A handler to be called by a dom-element
         * @param {event} event
         */
        inputFieldSlotAChanged: function(event) {
            // update the cubixx-model
            this.setA(event.target.value);
        },
        inputFieldSlotBChanged: function(event) {
            // update the cubixx-model
            this.setB(event.target.value);
        },

        inputFieldSlotslotcNameChanged: function(event) {
            var c = this.getC();
            c.name = event.target.value;
            this.setC(c);
        },
        inputFieldSlotslotcFirstNameChanged: function(event) {
            var c = this.getC();
            c.firstname = event.target.value;
            this.setC(c);
        },

        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelAChanged: function(newValue) {
            // update the view
            this.$.slota.setAttribute('value', newValue);
        },
        modelBChanged: function(newValue) {
            // update the view
            this.$.slotb.setAttribute('value', newValue);
        },
        modelCChanged: function(newValue) {
            // update the view
            this.$.slotcName.value = newValue.name;
            this.$.slotcFirstName.value = newValue.firstname;
        }
    });
}());
