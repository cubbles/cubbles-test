(function () {
  'use strict';
  CubxComponent({
    is: 'bundesland-wappen',

    ready: function () {
      this.querySelector('#bl b').innerHTML = this.getBl();
    },

    modelBlChanged: function (value) {
      this.querySelector('#bl b').innerHTML = value;
      var className = this.convertToClass(value);
      this.blClass = className + ' wappen';
      this.querySelector('#wappen').className = this.blClass;
    },
    convertToClass: function (value) {
      return value.toLowerCase().replace('ü', 'ue');
    }
  });

}());
