(function () {
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
    is: 'repeated-value-elementary-e',

    /**
     * Manipulate an element’s local DOM when the element is constructed.
     */
    ready: function () {
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    clickHandler: function (event) {
      // update the cubixx-model
      this.setClicked(true);
    }
  });
}());
