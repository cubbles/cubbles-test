(function () {
  'use strict';

  CubxComponent({
    is: 'my-elementary-1',

    ready: function () {
      if (this.getMessage()) {
        this.querySelector('#message').setAttribute('value', this.getMessage());
      }
      this.addEventListener('change', this.inputFieldMessageChanged.bind(this));
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      this.setConnected({values: []});
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldMessageChanged: function (event) {
      // update the cubbles-model
      this.setMessage(event.target.value);
    },

    modelMessageChanged: function (newValue) {
      // update the view
      this.querySelector('#message').setAttribute('value', newValue);
      this.model.connected.values.push(newValue);
      this.setConnected(this.getConnected());
    },

    modelConnectedChanged: function (newValue) {
      console.log(newValue);
      this.querySelector('#values').innerHTML = newValue.values.join(', ');
    }
  });
}());
