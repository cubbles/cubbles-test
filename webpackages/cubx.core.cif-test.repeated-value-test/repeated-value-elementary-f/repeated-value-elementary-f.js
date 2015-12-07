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
        is: 'repeated-value-elementary-f',

        /**
         * Manipulate an element’s local DOM when the element is constructed.
         */
        ready: function() {

        },


        /**
         *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
         */
        modelClickedChanged: function(newValue) {
            // update the view
            this.addNewButtonClick();
        },
        addNewButtonClick: function() {
            var dateTime = new Date();
            var options = {
                weekday: 'long', year: 'numeric', month: 'long',
                day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
            };
            var dateTimeString = dateTime.toLocaleTimeString('de-DE', options)
            var message = 'clicked: ' + dateTimeString;
            var article = document.createElement('article');
            article.innerHTML = message;
            Polymer.dom(this.$.messages).appendChild(article);
        }
    });
}());
