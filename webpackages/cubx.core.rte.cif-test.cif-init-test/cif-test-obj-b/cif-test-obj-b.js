(function () {
  'use strict';
  CubxComponent({
    is: 'cif-test-obj-b',
    ready: function () {
      this.querySelector('#slota').innerHTML = this.getA().value;
      this.querySelector('[for = slota]').innerHTML = this.getA().label;
      this.querySelector('#slotb').innerHTML = this.getB().value;
      this.querySelector('[for = slotb]').innerHTML = this.getB().label;
      this.querySelector('#slotc').innerHTML = this.getC().value;
      this.querySelector('[for = slotc]').innerHTML = this.getC().label;
      this.querySelector('#slotd').innerHTML = this.getD().value;
      this.querySelector('[for = slotd]').innerHTML = this.getD().label;
    },

    modelAChanged: function (value) {
      this.querySelector('#slota').innerHTML = this.getA().value;
      this.querySelector('[for = slota]').innerHTML = this.getA().label;
    },
    modelBChanged: function (value) {
      this.querySelector('#slotb').innerHTML = this.getB().value;
      this.querySelector('[for = slotb]').innerHTML = this.getB().label;
    },
    modelCChanged: function (value) {
      this.querySelector('#slotc').innerHTML = this.getC().value;
      this.querySelector('[for = slotc]').innerHTML = this.getC().label;
    },
    modelDChanged: function (value) {
      this.querySelector('#slotd').innerHTML = this.getD().value;
      this.querySelector('[for = slotd]').innerHTML = this.getD().label;
    }

  })
}())
