(function () {
  'use strict';
  CubxComponent({
    is: 'repeated-value-elementary-e',

    ready: function () {
      this.querySelector('#click').addEventListener('click', this.clickHandler.bind(this));
    },

    clickHandler: function (event) {
      // update the cubbles-model
      this.setClicked(true);
    }
  });
}());
