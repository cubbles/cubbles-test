(function () {
  'use strict';
  CubxComponent({
    is: 'copy-value-test-b',
    ready: function () {
      this.querySelector('#slot-a').innerHTML = this.getA();
      this.querySelector('#slot-b').innerHTML = this.getB();
      this.querySelector('#slot-c').innerHTML = this.getC();
      this.querySelector('#slot-d').innerHTML = this.getD();
    },
    modelAChanged: function (value) {
      this.querySelector('#slot-a').innerHTML = this.getA();
    },
    modelBChanged: function (value) {
      this.querySelector('#slot-b').innerHTML = this.getB();
    },
    modelCChanged: function (value) {
      this.querySelector('#slot-c').innerHTML = this.getC();
    },
    modelDChanged: function (value) {
      this.querySelector('#slot-d').innerHTML = this.getD();
    }
  });
}());
