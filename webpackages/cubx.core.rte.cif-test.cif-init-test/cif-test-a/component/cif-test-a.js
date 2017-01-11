(function () {
  'use strict';
  CubxPolymer({
    is: 'cif-test-a',
    ready: function () {
      this.$.slota.setAttribute('value', this.getA());
      this.$.slotb.setAttribute('value', this.getB());
      this.$.slotc.setAttribute('value', this.getC());
      this.$.slotd.setAttribute('value', this.getD());
    },
    changeAHandler: function (event) {
      this.setA(event.target.value);
    },
    changeBHandler: function (event) {
      this.setB(event.target.value);
    },
    changeCHandler: function (event) {
      this.setC(event.target.value);
    },
    changeDHandler: function (event) {
      this.setD(event.target.value);
    },
    modelAChanged: function () {
      this.$.slota.setAttribute('value', this.getA());
    },
    modelBChanged: function () {
      this.$.slotb.setAttribute('value', this.getB());
    },
    modelCChanged: function () {
      this.$.slotc.setAttribute('value', this.getC());
    },
    modelDChanged: function () {
      this.$.slotd.setAttribute('value', this.getD());
    }
  });
}());
