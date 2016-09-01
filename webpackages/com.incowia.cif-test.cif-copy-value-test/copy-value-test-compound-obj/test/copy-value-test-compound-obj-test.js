'use strict';

describe('copy-value', function () {
  this.timeout(7000);
  before(function (done) {
    document.body.addEventListener('cifReady', function () {
      done();
    });
  });

  describe('missing copyValue attribute indicate copyValue is true', function () {
    var newObj;

    before(function () {
      newObj = {
        label: 'slot a',
        value: 9
      };
      document.querySelector('copy-value-test-compound-obj').setInputSlot('aa',
        { slot: 'aa', payload: newObj });
      newObj.value = 15;
    });

    it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "a"', function () {
      document.querySelector('copy-value-test-obj-a').model.a.should.not.eql(newObj);
    });
    it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "a"', function () {
      document.querySelector('copy-value-test-obj-b').model.a.should.not.eql(newObj);
    });
    it('component "copy-value-test-obj-a" slot "a" indicate not a change of ' +
      'component "copy-value-test-obj-b" slot "a" ',
      function () {
        document.querySelector('copy-value-test-obj-a').model.a.value = 999;
        document.querySelector('copy-value-test-obj-b').model.a.should.not.eql(
          document.querySelector('copy-value-test-obj-a').model.a);
      });
  });
  describe('copyValue is explizit true', function () {
    var newObj;
    before(function () {
      newObj = {
        label: 'slot b',
        value: 9
      };
      var element = document.querySelector('copy-value-test-compound-obj');
      console.log('element.setInputSlot', element.setInputSlot);
      document.querySelector('copy-value-test-compound-obj').setInputSlot('bb',
        { slot: 'bb', payload: newObj });

      newObj.value = 15;
    });

    it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "b"', function () {
      document.querySelector('copy-value-test-obj-a').model.b.should.not.eql(newObj);
    });
    it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "b"', function () {
      document.querySelector('copy-value-test-obj-b').model.b.should.not.eql(newObj);
    });
    it('component "copy-value-test-obj-a" slot "b" indicate not a change of ' +
      'component "copy-value-test-obj-b" slot "b" ',
      function () {
        document.querySelector('copy-value-test-obj-a').model.b.value = 999;
        document.querySelector('copy-value-test-obj-b').model.b.should.not.eql(
          document.querySelector('copy-value-test-obj-a').model.b);
      });
  });
  describe('copyValue is false', function () {
    var newObj;
    before(function () {
      newObj = {
        label: 'slot c',
        value: 9
      };
      document.querySelector('copy-value-test-compound-obj').setInputSlot('cc',
        { slot: 'cc', payload: newObj });

      newObj.value = 15;
    });

    it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "c"', function () {
      document.querySelector('copy-value-test-obj-a').model.c.should.eql(newObj);
    });
    it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "c"', function () {
      document.querySelector('copy-value-test-obj-b').model.c.should.eql(newObj);
    });
    it('component "copy-value-test-obj-a" slot "b" indicate not a change of ' +
      'component "copy-value-test-obj-b" slot "c" ',
      function () {
        document.querySelector('copy-value-test-obj-a').model.c.value = 999;
        document.querySelector('copy-value-test-obj-b').model.c.should.eql(
          document.querySelector('copy-value-test-obj-a').model.c);
      });
  });
});

