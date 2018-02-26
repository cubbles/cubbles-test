(function () {
  'use strict';
  CubxComponent({
    is: 'message-box',

    created: function () {
      this.isReady = false;
    },
    ready: function () {
      if (this.getMessage()) {
        this.querySelector('#message-container').innerHTML = this.getMessage();
      }
    },

    contextReady: function () {
      this.isReady = true;
      if (this.getMessage()) {
        this.querySelector('.message').innerHTML = this.getMessage();
      }
    },
    modelMessageChanged: function (newValue) {
      if (this.isReady) {
        this.querySelector('.message').innerHTML = newValue;
      }
    }
  });
}());
