/* globals fetch */
(function () {
  'use strict';
  CubxComponent({
    is: 'dummy-data',


    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
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
