/* globals findAncestorElement */
(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubixx-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'transportable-element',

    /**
     * Manipulate an element’s local DOM when the element is constructed.
     */
    ready: function () {
      this.addEventListener('dragstart', this.handleDragStart);
      this.addEventListener('dragend', this.handleDragEnd);

      // set value-attribute of element with id='slota' to the initial value of slot 'a'
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
