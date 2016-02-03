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
        is: 'content-element',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {

        },
        modelMessageChanged: function(newValue){
            console.log('modelMessageChanged ', newValue);
            this.$.content.innerHTML = newValue;
        }
    });
}());
