(function () {
  'use strict';
  /**
   */
  CubxPolymer({
    is: 'nested-elementary',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      this.$$('.container').classList.remove('hidden');
      this.$$('button').removeAttribute('disabled');
    },

    handleClick: function () {
      var elem = this.createMessage();
      Polymer.dom(this.$$('.container')).appendChild(elem);
      var message = this.$.message.value;
      elem.setMessage(message);
      if (this.$$('.hidden')) {
        this.$$('.hidden').classList.remove('hidden');
      }
      this.$.message.value = '';
    },

    createMessage: function (name, data) {
      var elem = document.createElement('message-box');
      elem.classList.add('item');
      return elem;
    }
  });
}());
