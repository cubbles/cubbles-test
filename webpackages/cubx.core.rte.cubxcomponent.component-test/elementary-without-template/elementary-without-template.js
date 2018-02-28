(function () {
  'use strict';

  CubxComponent({
    is: 'elementary-without-template',

    created: function () {
      console.log(this.is + '#created');
      this.addMessage(this.is + '#created');
    },

    ready: function () {
      console.log(this.is + '#ready');
      this.addMessage(this.is + '#ready');
    },

    connected: function () {
      console.log(this.is + '#connected');
      this.addMessage(this.is + '#connected');
    },

    disconnected: function () {
      console.log(this.is + ' disconnected');
      // this.addMessage(this.is + ' disconnected'); this could not be worked, because the element is disconnected from dom
    },

    contextReady: function () {
      console.log(this.is + '#contextReady');
      this.addMessage(this.is + '#contextReady');
    },

    modelNumberInputOutputChanged: function (value) {
      this.addMessage(this.is + '#modelNumberInputOutput ' + ' called with ' + value);
      this.addToOutputObject(value);
    },

    modelStringInputChanged: function (value) {
      this.addMessage(this.is + '#modelStringInputChanged ' + ' called with ' + value);
      this.addToOutputObject(value);
    },

    modelObjectOutputChanged: function (value) {
      this.addMessage(this.is + '#modelObjectOutputChanged ' + ' called with ' + JSON.stringify(value));
    },

    modelObjectInputOutputChanged: function (value) {
      this.addMessage(this.is + '#modelObjectInputOutputChanged ' + ' called with ' + JSON.stringify(value));
    },

    addMessage: function (message) {
      this.setMessage(this.getMessage() ? this.getMessage() + '<br>' + message : message);
    },
    addToOutputObject: function (value) {
      var obj = this.getObjectOutput();
      if (!obj) {
        obj = {
          numbers: [],
          strings: []
        };
      }
      switch (typeof value) {
        case 'number':
          obj.numbers.push(value);
          break;
        case 'string':
          obj.strings.push(value);
          break;
        default:
          console.err('string or number expected');
      }
      this.setObjectOutput(obj);
    }
  });
}());
