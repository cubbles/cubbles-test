/* global describe,it, before,after,berforeEach,afterEach */
'use strict';

describe('<connectionhook-elementary-b>', function () {
  this.timeout(50000);
  before(function (done) {
    console.log('ooooooooooooooooooooooo');
    document.body.addEventListener('cifReady', function () {
      done();
    });
  });

  describe('#setA', function () {
    var element;
    var valueA;
    beforeEach(function () {
      element = document.querySelector('connectionhook-elementary-b');
      valueA = 876;
      element.setA(valueA);
    });
    it('html ELment with id slotb has the content from valueA', function () {
      console.log('xxxxxxx');
      element.querySelector('#slota').innerHTML.should.equal(String(valueA));
    });
  });
});
