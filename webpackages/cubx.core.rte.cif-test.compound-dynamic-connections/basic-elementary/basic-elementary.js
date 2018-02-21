(function () {
  'use strict';
  CubxComponent({
    is: 'basic-elementary',

    /**
     * Manipulate an element’s local DOM when the element is constructed.
     */
    ready: function () {
      if (this.getMessage()) {
        this.querySelector('#message').value = this.getMessage();
      }
      this.querySelector('#message').addEventListener('input', function (evt) {
        this.setMessage(evt.target.value);
      }.bind(this));
    },
    contextReady: function () {
      this.showRuntimeId();
    },
    showRuntimeId: function () {
      console.log('this.getRuntimeId()', this.getRuntimeId());
      if (this.getRuntimeId()) {
        var p = document.createElement('p');
        p.innerHTML = '<b>runtimeId</b><br>' + this.getRuntimeId();
        var h1 = this.querySelector('h1');
        this.insertBefore(p, h1.nextElementSibling);
      } else {
        console.log('no runtimeId found');
      }
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'slotA' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.querySelector('#message').value = this.getMessage();
    }
  });
}());
