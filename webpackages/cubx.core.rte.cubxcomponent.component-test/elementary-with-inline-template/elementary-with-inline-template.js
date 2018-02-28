(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxComponent({
    is: 'elementary-with-inline-template',

    template: {
      content: '<label for="input">label</label><input id="input" value="">'
    },
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
      this.addMessage(this.is + ' #ready called');
      var label = this.querySelector('[for = input]');
      label.textContent = this.getLabel();
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
      this.addMessage(this.is + '#connected called');
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this.addMessage(this.is + '#contextReady called');
    },

    modelValueChanged: function (value) {
      this.querySelector('#input').value = value;
      this.addMessage(this.is + '#modelValueChanged called with "' + value + '"');
    },

    modelLabelChanged: function (value) {
      this.querySelector('[for = input]').textContent = value;
      this.addMessage(this.is + '#modelLabelChanged called with "' + value + '"');
    },

    addMessage: function (message) {
      this.setMessage(this.getMessage() ? this.getMessage() + '<br>' + message : message);
    }
  });
}());
