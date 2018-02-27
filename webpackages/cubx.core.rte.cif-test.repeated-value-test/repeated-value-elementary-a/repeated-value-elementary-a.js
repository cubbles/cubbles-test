(function () {
  'use strict';
  CubxComponent({
    is: 'repeated-value-elementary-a',

    ready: function () {
      // set value-attribute of element with id='slota' to the initial value of slot 'a'
      this.querySelector('#slota').value = this.getA();
      this.querySelector('#slotb').value = this.getB();
      if (this.getC()) {
        this.querySelector('#slotc').checked = true;
      } else {
        this.querySelector('#slotc').checked = false;
      }
      this.querySelector('#slotd').value = this.getD().value;
      this.querySelector('[for = slotd]').innerHTML = this.getD().label;
      this.querySelector('#slota').addEventListener('change', this.inputFieldSlotAChanged.bind(this));
      this.querySelector('#slotb').addEventListener('change', this.inputFieldSlotBChanged.bind(this));
      this.querySelector('#slotc').addEventListener('change', this.inputFieldSlotCChanged.bind(this));
      this.querySelector('#slotd').addEventListener('change', this.inputFieldSlotDChanged.bind(this));
    },

    inputFieldSlotAChanged: function (event) {
      // update the cubbles-model
      this.setA(event.target.value);
    },

    inputFieldSlotBChanged: function (event) {
      // update the cubbles-model
      this.setB(event.target.value);
    },

    inputFieldSlotCChanged: function (event) {
      // update the cubbles-model
      var value = event.target.checked ? event.target.checked : false;
      this.setC(value);
    },

    inputFieldSlotDChanged: function (event) {
      var d = {
        label: event.target.label,
        value: event.target.value
      };
      this.setD(d);
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
      console.log('###### modelCChanged this', this);
      // update the view
      if (newValue) {
        this.querySelector('#slotc').checked = true;
      } else {
        this.querySelector('#slotc').checked = false;
      }
    },
    modelDChanged: function (newValue) {
      // update the view
      this.querySelector('#slotd').value = newValue.value;
      this.querySelector('[for = slotd]').innerHTML = newValue.label;
    }
  });
}());
