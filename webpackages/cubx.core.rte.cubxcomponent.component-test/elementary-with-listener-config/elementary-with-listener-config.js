(function () {
  'use strict';

  CubxComponent({
    is: 'elementary-with-listener-config',

    listener: {
      'slota.change': 'inputFieldSlotAChanged',
      'change': 'changeListener'
    },

    inputFieldSlotAChanged: function (event) {
      // update the cubbles-model
      this.setA(event.target.value);
    },
    changeListener: function (evt) {
      var target = evt.target;
      window.alert('element ' + target.is + '#' + target.id + ' value changed');
    },

    modelAChanged: function (newValue) {
      // update the view
      this.$.slota.setAttribute('value', newValue);
    }
  });
}());
