(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxComponent({
    is: 'elementary-with-template',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
      this.addMessage('#created called');
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.addMessage('#ready called');
      var label = this.querySelector('[for = input]');
      label.innerHTML = this.getLabel();
      var element = this.querySelector('#input');
      element.value = this.getValue() ? this.getValue() : '';
      element.addEventListener('change', this.inputChangeHandler.bind(this));
    },

    inputChangeHandler: function (event) {
      this.setValue(event.target.value);
    },
    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      this.addMessage('#connected called');
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this.addMessage('#contextReady called');
    },

    modelValueChanged: function (value) {
      this.addMessage('#modelValueChanged called with "' + value + '"');
    },

    addMessage: function (message) {
      this.setMessage(this.getMessage() ? this.getMessage() + '<br>' + message : message);
    }
  });
}());
