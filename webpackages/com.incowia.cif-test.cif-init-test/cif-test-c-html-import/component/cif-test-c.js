(function () {
  'use strict';
  CubxPolymer({
    is: 'cif-test-c',
    ready: function () {
      this.$.slotout.setAttribute('value', this.getOut());
    },
    changeOutHandler: function (event) {
      this.setOut(event.target.value);
    },
    modelOutChanged: function () {
      this.$.slotout.setAttribute('value', this.getOut());
    }
  });
}());
