(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxComponent({
    is: 'elementary-without-template',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
      console.log(this.is + ' created');
      this.addMessage(this.is + ' created');
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      console.log(this.is + ' ready');
      this.addMessage(this.is + ' ready');
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      console.log(this.is + ' connected');
      this.addMessage(this.is + ' connected');
    },

    disconnected: function () {
      console.log(this.is + ' disconnected');
      this.addMessage(this.is + ' disconnected');
    },
    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      console.log(this.is + ' cubxReady');
      this.addMessage(this.is + ' cubxReady');
    },

    modelNumberInputOutputChanged: function (value) {
      this.addMessage(this.is + '.modelNumberInputOutput ' + ' called with ' + value);
      this.addToOutputObject(value);
    },

    modelStringInputChanged: function (value) {
      this.addMessage(this.is + '.modelStringInputChanged ' + ' called with ' + value);
      this.addToOutputObject(value);
    },

    modelObjectOutputChanged: function (value) {

      this.addMessage(this.is + '.modelObjectOutputChanged ' + ' called with ' + JSON.stringify(value));
    },

    modelObjectInputOutputChanged: function (value) {
      this.addMessage(this.is + '.modelObjectOutputChanged ' + ' called with ' + JSON.stringify(value));
    },

    addMessage: function (message) {
      this.setMessage(this.getMessage() ? this.getMessage() + '<br>' + message: message);
    },
    addToOutputObject: function( value ) {
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
