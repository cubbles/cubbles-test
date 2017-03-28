(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   */
  CubxPolymer({
    is: 'my-elementary-2',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
      this.setAttached({values: []});
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'a' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.push('model.attached.values', newValue);
      this.setAttached(this.getAttached());
    },

    modelAttachedChanged: function (newValue) {
      console.log(newValue);
      this.$.values.innerHTML = newValue.values.join(', ');
    }
  });
}());
