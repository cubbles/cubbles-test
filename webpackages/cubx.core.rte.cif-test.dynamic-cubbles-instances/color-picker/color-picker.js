(function () {
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
    is: 'color-picker',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      // set value-attribute of element with id='slota' to the initial value of slot 'a'
      this.$$('#chosen-value').setAttribute('value', this.getColor());
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldColorValueChanged: function (event) {
      // update the cubbles-model
      this.setColor(event.target.value);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'color' has changed ...
     */
    modelColorChanged: function (newValue) {
      // update the view
      this.$$('#chosen-value').setAttribute('value', newValue);
    }
  });
}());
