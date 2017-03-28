/*globals alert*/
'use strict';
function newContent () {
  alert('test-util is changing background color');
  document.body.style.background = '#D9EDFE';
}

window.onload = newContent();
