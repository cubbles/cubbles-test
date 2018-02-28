(function () {
  'use strict';

  CubxComponent({
    is: 'wrapper-example',

    modelMessageChanged: function (newValue) {
      // update the view
      this.$.counter.textContent = this.counter();
      if (newValue.header) {
        this.$$('.header').textContent = newValue.header;
      }
      if (newValue.content) {
        this.$$('.content').textContent = newValue.content;
      }
      if (newValue.classDef) {
        this.$$('#main').className = newValue.classDef;
      }
    },

    modelStyleChanged: function(newValue) {
      if (typeof newValue !== 'object' || !newValue) {
        return;
      }
      Object.keys(newValue).forEach(function (key) {
        if (newValue.hasOwnProperty(key)) {
          var item = newValue[key];
          if (typeof item !== 'string' || !item || item.trim().length === 0){
            return;
          }
          this.$.main.style[key] = item;
        }
      }.bind(this));
    },
    counter: function () {
      if (!this.count) {
        this.count = 0;
      }
      return ++this.count;
    }

  });
}());
