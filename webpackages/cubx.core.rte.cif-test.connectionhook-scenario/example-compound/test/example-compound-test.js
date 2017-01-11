/* global describe,it,before,after,beforeEach,afterEach */
'use strict';

describe('<example-compound>', function () {
  this.timeout(10000);
  before(function (done) {
    document.body.addEventListener('cifReady', function () {
      done();
    });
  });

  describe('connectionhooks changed transported value', function () {
    var message = 'xxx';
    beforeEach(function () {
      var messageElem = document.querySelector('[member-id=first]');
      messageElem.setMessage(message);
    });
    it('input element in "second" member has value message + " (1) (4)"', function () {
      console.log(document.querySelector('[member-id=second]'));
      var messageElem = document.querySelector('[member-id=second]').querySelector('#message');
      console.log('(1) messageElem', messageElem);
      messageElem.should.have.property('value', message + ' (1) (4)');
    });
    it('input element in "third" member has value: message + " (1) (4) (5) (2) (4)"', function () {
      var messageElem = document.querySelector('[member-id=third]').querySelector('#message');
      console.log('(2) messageElem', messageElem);
      messageElem.should.have.property('value', message + ' (1) (4) (5) (2) (4)');
    });
    it('input element in "fourth" member has value: message + " (1) (4) (5) (2) (4) (5) (3)"', function () {
      var messageElem = document.querySelector('[member-id=fourth]').querySelector('#message');
      console.log('(3) messageElem', messageElem);
      messageElem.should.have.property('value', message + ' (1) (4) (5) (2) (4) (5) (3)');
    });
  });
});
