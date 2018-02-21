(function () {
  'use strict';
  CubxComponent({
    is: 'cif-test-a',
    ready: function () {
      this.querySelector('#slota').addEventListener('change', this.changeAHandler.bind(this));
      this.querySelector('#slotb').addEventListener('change', this.changeAHandler.bind(this));
      this.querySelector('#slotc').addEventListener('change', this.changeAHandler.bind(this));
      this.querySelector('#slotd').addEventListener('change', this.changeAHandler.bind(this));
      this.querySelector('#slota').setAttribute('value', this.getA());
      this.querySelector('#slotb').setAttribute('value', this.getB());
      this.querySelector('#slotc').setAttribute('value', this.getC());
      this.querySelector('#slotd').setAttribute('value', this.getD());
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
      this.querySelector('#slota').setAttribute('value', this.getA());
    },
    modelBChanged: function () {
      this.querySelector('#slotb').setAttribute('value', this.getB());
    },
    modelCChanged: function () {
      this.querySelector('#slotc').setAttribute('value', this.getC());
    },
    modelDChanged: function () {
      this.querySelector('#slotd').setAttribute('value', this.getD());
    }
  });
}());
