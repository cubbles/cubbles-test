(function () {
  'use strict';
  CubxComponent({
    is: 'connection-import',

    modelConnectionsChanged: function (newValue) {
      console.log(JSON.parse(newValue));
      this.querySelector('#output').value = JSON.stringify(JSON.parse(newValue), null, 4);
    },
    modelTriggerImportChanged: function (newValue) {
      if (newValue) {
        this.importDynamicConnections(this.querySelector('#output').value);
      }
    }
  });
}());
