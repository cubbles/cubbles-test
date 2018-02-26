(function () {
  'use strict';
  CubxComponent({
    is: 'content-element',

    ready: function () {

    },
    modelMessageChanged: function (newValue) {
      console.log('modelMessageChanged ', newValue);
      this.querySelector('#content').innerHTML = newValue;
    }
  });
}());
