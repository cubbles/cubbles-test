(function () {
  'use strict';
  CubxComponent({
    is: 'one-elementary',

    created: function () {
    },

    ready: function () {
      this.querySelector('#slota').value = this.getA();
      this.querySelector('#slota').addEventListener('input', this.inputHandler.bind(this));
    },

    connected: function () {
    },
    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputHandler: function (event) {
      this.setA(event.target.value);
    },
    contextReady: function () {
    },

    modelAChanged: function (newValue) {
      this.querySelector('#slota').value = newValue;
    }
  });
}());
