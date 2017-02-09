(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxPolymer({
    is: 'bundesland-statistik',

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

    getNationalityKey: function (model, index) {
      var data = this.getStatisticData();
      if (data) {
        var keys = Object.keys(data);
        if (keys.length > index) {
          return keys[ index ];
        }
      }
      return '';
    },

    getCell: function (model, nationalityIndex, genderIndex) {
      var data = this.getStatisticData();
      if (data) {
        try {
          var keys = Object.keys(data);
          var genderKeys = Object.keys(data[ keys[ 1 ] ]);
          return data[ keys[ nationalityIndex ] ][ genderKeys[ genderIndex ] ];
        } catch (err) {
          return '';
        }
      }
      return '';
    },
    getGenderKey: function (model, index) {
      var data = this.getStatisticData();
      if (data) {
        var keys = Object.keys(data);
        var genderKeys = Object.keys(data[ keys[ 1 ] ]);
        if (genderKeys.length > index) {
          return genderKeys[ index ];
        }
      }
      return '';
    }

  });
}());
