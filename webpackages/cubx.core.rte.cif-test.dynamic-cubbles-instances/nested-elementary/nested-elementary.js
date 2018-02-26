(function () {
  'use strict';
  /**
   */
  CubxComponent({
    is: 'nested-elementary',

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.querySelector('#addMessage').addEventListener('click', this.handleClick.bind(this));
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this.querySelector('.container').classList.remove('hidden');
      this.querySelector('button').removeAttribute('disabled');
    },

    handleClick: function () {
      var elem = this.createMessage();
      this.querySelector('.container').appendChild(elem);
      var message = this.querySelector('#message').value;
      elem.setMessage(message);
      if (this.querySelector('.hidden')) {
        this.querySelector('.hidden').classList.remove('hidden');
      }
      this.querySelector('#message').value = '';
    },

    createMessage: function (name, data) {
      var elem = document.createElement('message-box');
      elem.classList.add('item');
      return elem;
    }
  });
}());
