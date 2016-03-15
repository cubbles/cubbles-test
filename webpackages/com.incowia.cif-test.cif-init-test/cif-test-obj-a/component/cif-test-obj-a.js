(function () {
  'use strict';
  CubxPolymer({
    is: 'cif-test-obj-a',
    ready: function () {
      this.$.slota.setAttribute('value', this.getA().value);
      this.$.slotb.setAttribute('value', this.getB().value);
      this.$.slotc.setAttribute('value', this.getC().value);
      this.$.slotd.setAttribute('value', this.getD().value);
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
      this.$.slota.setAttribute('value', this.getA().value);
    },
    modelBChanged: function () {
      this.$.slotb.setAttribute('value', this.getB().value);
    },
    modelCChanged: function () {
      this.$.slotc.setAttribute('value', this.getC().value);
    },
    modelDChanged: function () {
      this.$.slotd.setAttribute('value', this.getD().value);
    }
  });
}());
