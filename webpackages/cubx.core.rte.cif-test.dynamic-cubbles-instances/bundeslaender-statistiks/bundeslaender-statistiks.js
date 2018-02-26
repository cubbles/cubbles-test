(function () {
  'use strict';
  CubxComponent({
    is: 'bundeslaender-statistiks',
    isReady: false,

    created: function () {
      this.isReady = false;
      this.filteredElements = {}
    },
    ready: function () {
      this.querySelector('#filter').addEventListener('input', this.handleFilter.bind(this));
    },
    contextReady: function () {
      this.isReady = true;
      this.showElements();
    },
    modelStatisticDataChanged: function (value) {
      this.filteredElements =  value;
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
        this.querySelector('.content').appendChild(elem);
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
      while (this.querySelector('.content').children.length > 0) {
        var el = this.querySelector('.content').children[0];
        el.parentNode.removeChild(el);
      }
    },
    handleFilter: function (evt) {
      var data = this.getStatisticData();
      if (evt.target.value === '') {
        this.filteredElements = data;
      }
      var filteredData = {};
      Object.keys(data).forEach(function(key){
        if (key.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1) {
          filteredData[key] = data[key];
        }
      });
      this.filteredElements = filteredData;
      this.showElements();
    },

    resetFilter: function () {
      this.querySelector('#filter').value = '';
    }
  });
}());
