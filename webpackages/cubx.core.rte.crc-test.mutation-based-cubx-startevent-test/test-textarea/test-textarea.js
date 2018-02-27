(function () {
  'use strict';
  CubxComponent({
    is: 'test-textarea',

    ready: function () {
      this.querySelector('label').setAttribute('for', this.getId());
      this.querySelector('textarea').id = this.getId();
      if (this.getValue()) {
        this.querySelector('textarea').value = this.getValue();
      }
      if (this.getLabel()) {
        this.querySelector('label').innerHTML = this.getLabel();
      }
      if (this.getCols()) {
        this.querySelector('textarea').setAttribute('cols', this.getCols());
      }
      if (this.getRows()) {
        this.querySelector('textarea').setAttribute('rows', this.getRows());
      }
    },

    modelIdChanged: function (value) {
      this.querySelector('label').setAttribute('for', value);
      this.querySelector('textarea').id = value;
    },

    modelValueChanged: function (value) {
      if (!value) {
        value = '';
      }
      this.querySelector('textarea').value = value;
    },

    modelLabelChanged: function (value) {
      if (!value) {
        value = '';
      }
      this.querySelector('label').innerHTML = value;
    },
    modelColsChanged: function (value) {
      this.querySelector('textarea').setAttribute('cols', value);
    },
    modelRowsChanged: function (value) {
      this.querySelector('textarea').setAttribute('rows', value);
    }
  });
}());
