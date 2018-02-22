(function () {
  'use strict';
  CubxComponent({
    is: 'message-viewer',

    ready: function () {
      if (this.getMessage()) {
        this.querySelector('#message').value = this.getMessage();
      }
      this.querySelector('#message').addEventListener('input', this.inputHandler.bind(this));
    },

    inputHandler: function (evt) {
      this.setMessage(evt.target.value);
    },


    modelMessageChanged: function (newValue) {
      this.querySelector('#message').value = newValue
    }
  });
}());
