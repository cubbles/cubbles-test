/* globals jscolor */
function setTextColor (picker) { // eslint-disable-line no-unused-vars
  document.querySelector('#chosen-value').style.color = '#' + picker.toString();
}
(function () {
  'use strict';

  CubxComponent({
    is: 'color-picker',

    ready: function () {
      // set value-attribute of element with id='slota' to the initial value of slot 'a'
      this.querySelector('#chosen-value').value = this.getColor();
      this.querySelector('#chosen-value').addEventListener('change', this.inputFieldColorValueChanged.bind(this));
    },

    connected: function () {
      jscolor.installByClassName('jscolor');
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldColorValueChanged: function (event) {
      // update the cubbles-model
      var color = event.target.value;
      if (!color.startsWith('#')) {
        color = '#' + color;
      }
      this.setColor(color);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'color' has changed ...
     */
    modelColorChanged: function (newValue) {
      // update the view
      this.querySelector('#chosen-value').value = newValue;
    }
  });
}());
