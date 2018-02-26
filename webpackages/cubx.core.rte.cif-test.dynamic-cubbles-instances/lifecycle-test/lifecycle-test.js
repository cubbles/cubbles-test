(function () {
  'use strict';

  CubxComponent({
    is: 'lifecycle-test',

    contextReady: function () {
      var spanEl = document.createElement('span');
      spanEl.innerHTML = 'contextReady is called';
      this.querySelector('#container').appendChild(spanEl);
    }

  });
}());
