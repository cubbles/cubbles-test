(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   */
  CubxComponent({
    is: 'my-elementary-2',

    ready: function () {
      if (this.getMessage()) {
        this.querySelector('#message').innerHTML = this.getMessage();
      }
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      this.setConnected({values: []});
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
      this.model.connected.values.push(newValue);
      this.setConnected(this.getConnected());
    },

    modelConnectedChanged: function (newValue) {
      console.log(newValue);
      this.querySelector('#values').innerHTML = newValue.values.join(', ');
    }
  });
}());
