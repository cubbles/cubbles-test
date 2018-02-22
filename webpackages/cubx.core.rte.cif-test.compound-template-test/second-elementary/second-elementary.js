(function () {
  'use strict';
  CubxComponent({
    is: 'second-elementary',

    created: function () {
    },

    ready: function () {
      this.querySelector('#slota').value = this.getA();
      this.querySelector('#slota').addEventListener('input', this.inputHandler.bind(this));
    },

    connected: function () {
    },

    contextReady: function () {
    },

    inputHandler: function (event) {
      this.setA(event.target.value);
    },

    modelAChanged: function (newValue) {
      // update the view
      this.querySelector('#slota').value = newValue;
    }
  });
}());
