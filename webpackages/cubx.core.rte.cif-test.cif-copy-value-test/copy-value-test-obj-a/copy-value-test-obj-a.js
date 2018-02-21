(function () {
  'use strict';
  CubxComponent({
    is: 'copy-value-test-obj-a',
    ready: function () {
      this.querySelector('#slota').addEventListener('change', this.changeAHandler.bind(this));
      this.querySelector('#slotb').addEventListener('change', this.changeBHandler.bind(this));
      this.querySelector('#slotc').addEventListener('change', this.changeCHandler.bind(this));
      this.querySelector('#slotd').addEventListener('change', this.changeDHandler.bind(this));
      this.querySelector('#slota').setAttribute('value', this.getA().value);
      this.querySelector('#slotb').setAttribute('value', this.getB().value);
      this.querySelector('#slotc').setAttribute('value', this.getC().value);
      this.querySelector('#slotd').setAttribute('value', this.getD().value);
      this.querySelector('[for = slota]').innerHTML = this.getA().label;
      this.querySelector('[for = slotb]').innerHTML = this.getB().label;
      this.querySelector('[for = slotc]').innerHTML = this.getC().label;
      this.querySelector('[for = slotd]').innerHTML = this.getD().label;
    },
    changeAHandler: function (event) {
      var a = {
        label: this.getA().label,
        value: event.target.value
      };
      this.setA(a);
    },
    changeBHandler: function (event) {
      var b = {
        label: this.getB().label,
        value: event.target.value
      };
      this.setB(b);
    },
    changeCHandler: function (event) {
      var c = {
        label: this.getC().label,
        value: event.target.value
      };
      this.setC(c);
    },
    changeDHandler: function (event) {
      var d = {
        label: this.getD().label,
        value: event.target.value
      };
      this.setD(d);
    },
    modelAChanged: function () {
      this.querySelector('#slota').setAttribute('value', this.getA().value);
    },
    modelBChanged: function () {
      this.querySelector('#slotb').setAttribute('value', this.getB().value);
    },
    modelCChanged: function () {
      this.querySelector('#slotc').setAttribute('value', this.getC().value);
    },
    modelDChanged: function () {
      this.querySelector('#slotd').setAttribute('value', this.getD().value);
    }
  });
}());
