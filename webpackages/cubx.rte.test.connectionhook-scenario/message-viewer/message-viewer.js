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
    is: 'message-viewer',

    /**
     * Manipulate an element’s local DOM when the element is constructed.
     */
    ready: function () {

    },

    cubxReady: function () {
      this.$.runtimeid.innerHTML = this.getAttribute('runtime-id');
    },
    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'a' has changed ...
     */
    modelMessageChanged: function (newValue) {
    }
  });
}());
