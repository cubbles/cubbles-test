(function () {
  'use strict';
  CubxComponent({
    is: 'copy-value-test-obj-b',
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
      this.querySelector('#slota').innerHTML = value.value;
      this.querySelector('[for = slota]').innerHTML = value.label;
    },
    modelBChanged: function (value) {
      this.querySelector('#slotb').innerHTML = value.value;
      this.querySelector('[for = slotb]').innerHTML = value.label;
    },
    modelCChanged: function (value) {
      this.querySelector('#slotc').innerHTML = value.value;
      this.querySelector('[for = slotc]').innerHTML = value.label;
    },
    modelDChanged: function (value) {
      this.querySelector('#slotd').innerHTML = value.value;
      this.querySelector('[for = slotd]').innerHTML = value.label;
    }
  });
}());
