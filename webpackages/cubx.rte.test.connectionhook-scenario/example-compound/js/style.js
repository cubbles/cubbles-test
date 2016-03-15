(function () {
  'use strict';
  document.addEventListener('cifReady', function () {
    var self = document.querySelector('example-compound');
    self.classList.add('row');
    var childElements = self.children;
    for (var i = 0; i < self.childElementCount; i++) {
      var elem = childElements[ i ];
      if (elem.tagName === 'MESSAGE-VIEWER' || elem.tagName === 'MESSAGE-VIEWER-COMPOUND') {
        elem.classList.add('col-md-3');
      }
    }
  });
}());

