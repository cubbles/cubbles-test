(function () {
  'use strict';

  CubxComponent({
    is: 'connectionhook-elementary-a',

    ready: function () {
      if (this.getA()) {
        this.querySelector('#slota').value = this.getA();
      }
      if (this.getB()) {
        this.querySelector('#slotb').value = this.getB();
      }
      if (this.getC() && this.getC().name) {
        this.querySelector('#slotcName').value = this.getC().name;
      }
      if (this.getC() && this.getC().firstname) {
        this.querySelector('#slotcFirstName').value = this.getC().firstname;
      }
      this.querySelector('#slota').addEventListener('change', this.inputFieldSlotAChanged.bind(this));
      this.querySelector('#slotb').addEventListener('change', this.inputFieldSlotBChanged.bind(this));
      this.querySelector('#slotcName').addEventListener('change', this.inputFieldSlotCNameChanged.bind(this));
      this.querySelector('#slotcFirstName').addEventListener('change', this.inputFieldSlotCFirstNameChanged.bind(this));
    },

    contextReady: function () {
      this.repropagateA();
      this.repropagateB();
      this.repropagateC();
    },
    inputFieldSlotAChanged: function (event) {
      // update the cubixx-model
      this.setA(event.target.value);
    },
    inputFieldSlotBChanged: function (event) {
      // update the cubixx-model
      this.setB(event.target.value);
    },

    inputFieldSlotCNameChanged: function (event) {
      var c = this.getC();
      c.name = event.target.value;
      this.setC(c);
    },
    inputFieldSlotCFirstNameChanged: function (event) {
      var c = this.getC();
      c.firstname = event.target.value;
      this.setC(c);
    },

    modelAChanged: function (newValue) {
      // update the view
      this.querySelector('#slota').value = newValue;
    },
    modelBChanged: function (newValue) {
      // update the view
      this.querySelector('#slotb').value = newValue;
    },
    modelCChanged: function (newValue) {
      // update the view
      this.querySelector('#slotcName').value = newValue.name;
      this.querySelector('#slotcFirstName').value = newValue.firstname;
    }
  });
}());
