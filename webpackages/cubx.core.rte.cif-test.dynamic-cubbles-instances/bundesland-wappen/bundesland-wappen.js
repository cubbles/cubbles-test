(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxPolymer({
    is: 'bundesland-wappen',

    properties: {
      blClass: {
        type: 'String'
      }
    },
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
    modelBlChanged: function (value) {
      var className = this.convertToClass(value);
      this.set('blClass', className + ' wappen');
    },
    convertToClass: function (value) {
      return value.toLowerCase().replace('ü', 'ue');
    }
  });

}());
