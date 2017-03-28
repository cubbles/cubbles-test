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
  CubxPolymer({
    is: 'my-elementary-1',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    ready: function () {
      this.$.message.setAttribute('value', this.getMessage());
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
      this.setAttached({values: []});
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
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
      this.$.message.setAttribute('value', newValue);
      this.push('model.attached.values', newValue);
      this.setAttached(this.getAttached());
    },

    modelAttachedChanged: function (newValue) {
      console.log(newValue);
      this.$.values.innerHTML = newValue.values.join(', ');
    }
  });
}());
