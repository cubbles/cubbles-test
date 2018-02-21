(function () {
  'use strict';
  CubxComponent({
    is: 'cif-test-c',
    ready: function () {
      this.querySelector('#slotout').addEventListener('change', this.changeOutHandler.bind(this));
      this.querySelector('#slotout').setAttribute('value', this.getOut());
    },
    changeOutHandler: function (event) {
      this.setOut(event.target.value);
    },
    modelOutChanged: function () {
      this.querySelector('#slotout').setAttribute('value', this.getOut());
    }
  });
}());
