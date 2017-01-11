'use strict';
document.addEventListener('cifReady', function () {
  console.log('hljs.initHighlighting()');
  var codeBlocks = document.querySelectorAll('pre code');
  for (var i = 0; i < codeBlocks.length; i++) {
    // eslint-disable-next-line no-undef
    hljs.highlightBlock(codeBlocks[ i ]);
  }
});
