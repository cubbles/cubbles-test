(function () {
  'use strict';

  CubxComponent({
    is: 'repeated-value-elementary-f',

    ready: function () {
    },

    modelClickedChanged: function (newValue) {
      // update the view
      this.addNewButtonClick();
    },

    addNewButtonClick: function () {
      var dateTime = new Date();
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      var dateTimeString = dateTime.toLocaleTimeString('de-DE', options);
      var message = 'clicked: ' + dateTimeString;
      var article = document.createElement('article');
      article.innerHTML = message;
      this.querySelector('#messages').appendChild(article);
    }
  });
}());
