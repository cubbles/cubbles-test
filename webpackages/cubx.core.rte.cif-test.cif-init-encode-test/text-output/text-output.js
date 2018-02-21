(function () {
  'use strict';

  CubxComponent({
    is: 'text-output',

    modelTextChanged: function (value) {
      console.log(value);
      var content = this.querySelector('.content');
      if (typeof value === 'string') {
        content.innerHTML = value.replace(/\\"/g, '"');
      } else if (typeof value === 'object') {
        content.innerHTML = JSON.stringify(value, null, 2).replace(/\\\\\\"/g, '"'); // Stringify encoded /"
      } else {
        content.innerHTML = value;
      }
    }

  });
}());
