(function () {
  'use strict';
  document.addEventListener('cifReady', function () {
    document.querySelector('dynamic-connection-compound').classList.add('row');
    document.querySelector('container-element').classList.add('col-md-6');
    document.querySelector('transportable-element').classList.add('col-md-6');
  });
}());
