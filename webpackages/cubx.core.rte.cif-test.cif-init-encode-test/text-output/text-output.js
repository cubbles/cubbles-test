(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxPolymer({
    is: 'text-output',

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
    },

    modelTextChanged: function (value) {
      console.log(value);
      var content = this.$$('.content');
      if (typeof value === 'string') {
        content.innerHTML = value.replace(/\\"/g, '"');
      } else if (typeof value === 'object') {
        content.innerHTML = JSON.stringify(value, null, 2).replace(/\\\\\\"/g, '"'); // Stringify encoded /"
      } else {
        content.innerHTML = value;
      }
    }

  });
}());
