/* globals findAncestorElement */
(function () {
  'use strict';
  CubxComponent({
    is: 'transportable-element',

    ready: function () {
      this.addEventListener('dragstart', this.handleDragStart);
      this.addEventListener('dragend', this.handleDragEnd);
      if (this.getMessage()) {
        this.querySelector('.message').innerHTML = this.getMessage();
      }
    },
    modelMessageChanged: function (value) {
      this.querySelector('.message').innerHTML = this.getMessage();
    },
    handleDragStart: function (e) {
      // console.log('dragstart');
      this.style.opacity = '0.4';
      var me = e.target;
      var host = findAncestorElement(me, 'transportable-element');
      if (!host) {
        throw new Error('Parent "transportable-element" not found.');
      }
      // console.log('transportable-element:dragstart:host', host);
      var msie = window.navigator.userAgent.indexOf('MSIE ');       // Detect IE
      var trident = window.navigator.userAgent.indexOf('Trident/'); // Detect IE 11
      var edge = window.navigator.userAgent.indexOf('Edge'); // Detect Edge
      var runtimeId = host.getAttribute('runtime-id');
      if (msie > 0 || trident > 0 || edge > 0) {
        e.dataTransfer.setData('Text', runtimeId);
      } else {
        e.dataTransfer.setData('runtimeId', runtimeId);
      }
      e.dataTransfer.effectAllowed = 'move';
    },
    handleDragEnd: function (e) {
      // console.log('dragend');
      this.style.opacity = '1';
    }

  });
}());
