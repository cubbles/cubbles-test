(function () {
  'use strict';
  if (!window.cubx) {
    window.cubx = {};
  }
  window.cubx.hookFunctions = {};
  window.cubx.hookFunctions.multiply10 = function (value, next) {
    value = Number(value) * 10;
    next(value);
  };

  window.cubx.hookFunctions.greeting = function (value, next) {
    value = 'Greeting: ' + value;
    next(value);
  };

  window.cubx.hookFunctions.fullName = function (value, next) {
    var newValue = {};
    newValue.name = value.firstname ? value.firstname + ' ' : '';
    newValue.name += value.name;
    next(newValue);
  };
})();
