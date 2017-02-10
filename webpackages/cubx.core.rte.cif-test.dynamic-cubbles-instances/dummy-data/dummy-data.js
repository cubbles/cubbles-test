/* globals fetch */
(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxPolymer({
    is: 'dummy-data',

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
      var list = document.querySelectorAll('link');
      var baseUrl;
      var href;
      for (var i = 0; i < list.length; i++) {
        href = list[ i ].getAttribute('href');
        if (!href) {
          continue;
        }
        var index = href.indexOf('/dummy-data/dummy-data.html');
        if (index > -1) {
          baseUrl = href.substr(0, index);
        }
      }
      fetch(baseUrl + '/dummy-data/data.json').then(function (response) {
        // Convert to JSON
        return response.json();
      }).then(function (obj) {
        this.setData(obj);
      }.bind(this));
    }

  });
}());
