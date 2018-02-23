(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubixx-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxComponent({
    is: 'connectionhook-elementary-b',

    ready: function () {
      if (this.getA()) {
        this.querySelector('#slota').innerHTML = this.getA();
      }
      if (this.getB()) {
        this.querySelector('#slotb').innerHTML = this.getB();
      }
      if (this.getC() && this.getC().name) {
        this.querySelector('#slotcName').innerHTML = this.getC().name;
      }
    },
    modelAChanged: function (newValue) {
      // update the view
      this.querySelector('#slota').innerHTML = newValue;
    },
    modelBChanged: function (newValue) {
      // update the view
      this.querySelector('#slotb').innerHTML = newValue;
    },
    modelCChanged: function (newValue) {
      // update the view
      this.querySelector('#slotcName').innerHTML = newValue.name;
    }

  });
}());
