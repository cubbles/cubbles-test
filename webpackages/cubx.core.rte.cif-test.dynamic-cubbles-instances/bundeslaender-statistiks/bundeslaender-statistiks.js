(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   */
  CubxPolymer({
    is: 'bundeslaender-statistiks',

    properties: {
      isReady: {
        type: 'Boolean',
        value: false
      },
      filteredElements: {
        type: 'Array',
        value: function () {
          return {};
        }
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
      this.set('isReady', true);
      this.showElements();
    },
    modelStatisticDataChanged: function (value) {
      this.set('filteredElements', value);
      this.resetFilter();
      if (this.isReady) {
        this.showElements();
      }
    },

    showElements: function () {
      this.clearElements();
      var allData = this.filteredElements;
      Object.keys(allData).forEach(function (key) {
        var data = allData[key];
        var elem = this.createElement(key, data);
        this.$$('.content').appendChild(elem);
        Polymer.dom.flush();
      }.bind(this));
    },
    createElement: function (name, data) {
      var elem = document.createElement('bundesland-info');
      elem.classList.add('item');
      var inits = document.createElement('cubx-core-init');
      inits.style.display = 'none';
      elem.appendChild(inits);
      var slotInit1 = document.createElement('cubx-core-slot-init');
      slotInit1.setAttribute('slot', 'bundeslandName');
      slotInit1.innerHTML = JSON.stringify(name);
      inits.appendChild(slotInit1);
      var slotInit2 = document.createElement('cubx-core-slot-init');
      slotInit2.setAttribute('slot', 'bundeslandData');
      slotInit2.innerHTML = JSON.stringify(data);
      inits.appendChild(slotInit2);
      return elem;
    },
    clearElements: function () {
      while (this.$$('.content').children.length > 0) {
        var el = this.$$('.content').children[0];
        el.parentNode.removeChild(el);
      }
    },
    handleFilter: function (evt) {
      var data = this.getStatisticData();
      if (evt.target.value === '') {
        this.set('filteredElements', data);
      }
      var filteredData = {};
      Object.keys(data).forEach(function(key){
        if (key.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1) {
          filteredData[key] = data[key];
        }
      });
      this.set('filteredElements', filteredData);
      this.showElements();
    },

    resetFilter: function () {
      this.$.filter.value = '';
    }
  });
}());
