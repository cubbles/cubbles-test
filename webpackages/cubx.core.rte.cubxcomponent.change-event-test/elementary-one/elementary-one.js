(function () {
  'use strict';

  CubxComponent({
    is: 'elementary-one',

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      if (this.getMessage()) {
        this.$.message.value = this.getMessage();
      }
      this.$.message.addEventListener('change', this.inputMessageHandler.bind(this));
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'slotName' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.$.message.value = newValue;
    },

    inputMessageHandler: function (evt) {
      this.setMessage(evt.target.value);
    }
  });
}());
