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
        is: 'repeated-value-elementary-a',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {
            // set value-attribute of element with id='slota' to the initial value of slot 'a'
            this.$.slota.value = this.getA();
            this.$.slotb.value = this.getB();
            if (this.getC()) {
                this.$.slotc.checked = true;
            } else {
                this.$.slotc.checked = false;
            }
            this.$.slotd.value = this.getD().value;
        },

        /**
         * A handler to be called by a dom-element
         * @param {Event} event
         */
        inputFieldSlotAChanged: function(event) {
            // update the cubixx-model
            this.setA(event.target.value);
        },

        /**
         * A handler to be called by a dom-element
         * @param {Event} event
         */
        inputFieldSlotBChanged: function(event) {
            // update the cubixx-model
            this.setB(event.target.value);
        },

        /**
         * A handler to be called by a dom-element
         * @param {Event} event
         */
        inputFieldSlotCChanged: function(event) {
            // update the cubixx-model
            var value = event.target.checked ? event.target.checked : false;
            this.setC(value);
        },

        inputFieldSlotDChanged: function(event) {
            var d = {
                label: event.target.label,
                value: event.target.value
            };
            this.setD(d);
        },
        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelAChanged: function(newValue) {
            // update the view
            this.$.slota.value = newValue;
        },
        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelBChanged: function(newValue) {
            // update the view
            this.$.slotb.value = newValue;
        },
        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelCChanged: function(newValue) {
            console.log('###### modelCChanged this', this);
            // update the view
            if (newValue) {
                this.$.slotc.checked = true;
            } else {
                this.$.slotc.checked = false;
            }
        },
        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelDChanged: function(newValue) {
            // update the view
            this.$.slotd.value= newValue.value;
        }
    });
}());
