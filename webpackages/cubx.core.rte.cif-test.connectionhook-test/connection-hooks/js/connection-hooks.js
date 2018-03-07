/* globals */
'use strict';

window.examples = {
  'test-connection-hook': function (value, next) {
    var sourceRuntimeId = this.source.getAttribute('runtime-id');
    var destinationRuntimeId = this.destination.getAttribute('runtime-id');
    var newValue = 'value: ' + value + ', sourceRuntimeId: ' + sourceRuntimeId + ', destinationRuntimeId: ' + destinationRuntimeId;
    next(newValue);
  },
  'test-connection-hook-object': function (value, next) {
    var sourceRuntimeId = this.source.getAttribute('runtime-id');
    var destinationRuntimeId = this.destination.getAttribute('runtime-id');
    value.sourceRuntimeId = sourceRuntimeId;
    value.destinationRuntimeId = destinationRuntimeId;
    next(value);
  }
};
