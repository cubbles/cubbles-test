/* globals alert */
(function () {
  'use strict';

  CubxComponent({
    is: 'elementary-contextready-method',

    ready: function () {
      // set value-attribute of element with id='slota' to the initial value of slot 'a'
      this.querySelector('#slota').value = this.getA();
      this.querySelector('#slota').addEventListener('change', this.inputFieldSlotAChanged.bind(this));
    },
    contextReady: function () {
      alert('contextReady called.');
    },

    inputFieldSlotAChanged: function (event) {
      // update the cubixx-model
      this.setA(event.target.value);
    },

    modelAChanged: function (newValue) {
      // update the view
      this.querySelector('#slota').value =  newValue;
    }
  });
}());
