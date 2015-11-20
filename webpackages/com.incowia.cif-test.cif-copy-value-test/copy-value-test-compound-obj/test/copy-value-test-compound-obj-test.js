'use strict';

describe('copy-value', function() {
    this.timeout(5000);
    before(function(done) {
        document.body.addEventListener('cifReady', function() {
            // console.log('xxxxxxxxxxxxxxxx cif ready');
            done();
        });
    });

    describe('missing copyValue attribute indicate copyValue is true', function() {
        var newObj;
        var retObj;
        before(function(done) {
            newObj = {
                label: 'slot a',
                value: 9
            };
            document.querySelector('copy-value-test-compound-obj').addEventListener('cifModelChange',
                function(evt) {
                    if (evt.detail.slot === 'aa' && evt.target.tagName === 'COPY-VALUE-TEST-COMPOUND-OBJ' &&
                        event.detail.payload.value === 9) {
                        retObj = event.detail.payload;
                        done();
                    }
                });

            document.querySelector('copy-value-test-compound-obj').setInputSlot('aa',
                {slot: 'aa', payload: newObj});

            newObj.value = 15;
        });

        it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "a"', function() {
            //console.log('!!!!!!!it', newObj);
            document.querySelector('copy-value-test-obj-a').model.a.should.not.eql(newObj);
        });
        it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "a"', function() {
            document.querySelector('copy-value-test-obj-b').model.a.should.not.eql(newObj);
        });
        it('component "copy-value-test-obj-a" slot "a" indicate not a change of ' +
            'component "copy-value-test-obj-b" slot "a" ',
            function() {
                document.querySelector('copy-value-test-obj-a').model.a.value = 999;
                document.querySelector('copy-value-test-obj-b').model.a.should.not.eql(
                    document.querySelector('copy-value-test-obj-a').model.a);
            });
        it('change of newObj not indicate a change of value of "copy-value-test-comound-obj" slot "aa"',
            function() {
                retObj.should.be.not.eql(newObj);
            });

    });
    describe('copyValue is explizit true', function() {
        var newObj;
        var retObj;
        before(function(done) {
            newObj = {
                label: 'slot b',
                value: 9
            };
            document.querySelector('copy-value-test-compound-obj').addEventListener('cifModelChange',
                function(evt) {
                    if (evt.detail.slot === 'bb' && evt.target.tagName === 'COPY-VALUE-TEST-COMPOUND-OBJ' &&
                        event.detail.payload.value === 9) {
                        retObj = event.detail.payload;
                        done();
                    }
                });

            document.querySelector('copy-value-test-compound-obj').setInputSlot('bb',
                {slot: 'bb', payload: newObj});

            newObj.value = 15;
        });

        it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "b"', function() {
            document.querySelector('copy-value-test-obj-a').model.b.should.not.eql(newObj);
        });
        it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "b"', function() {
            document.querySelector('copy-value-test-obj-b').model.b.should.not.eql(newObj);
        });
        it('component "copy-value-test-obj-a" slot "b" indicate not a change of ' +
            'component "copy-value-test-obj-b" slot "b" ',
            function() {
                document.querySelector('copy-value-test-obj-a').model.b.value = 999;
                document.querySelector('copy-value-test-obj-b').model.b.should.not.eql(
                    document.querySelector('copy-value-test-obj-a').model.b);
            });
        it('change of newObj not indicate a change of value of "copy-value-test-comound-obj" slot "bb"',
            function() {
                retObj.should.be.not.eql(newObj);
            });

    });
    describe('copyValue is false', function() {
        var newObj;
        var retObj;
        before(function(done) {
            newObj = {
                label: 'slot c',
                value: 9
            };
            document.querySelector('copy-value-test-compound-obj').addEventListener('cifModelChange',
                function(evt) {
                    if (evt.detail.slot === 'cc' && evt.target.tagName === 'COPY-VALUE-TEST-COMPOUND-OBJ' &&
                        event.detail.payload.value === 9) {
                        retObj = event.detail.payload;
                        done();
                    }
                });

            document.querySelector('copy-value-test-compound-obj').setInputSlot('cc',
                {slot: 'cc', payload: newObj});

            newObj.value = 15;
        });

        it('change of newObj indicate not a change of component "copy-value-test-obj-a" slot "c"', function() {
            document.querySelector('copy-value-test-obj-a').model.c.should.eql(newObj);
        });
        it('change of newObj indicate not a change of component "copy-value-test-obj-b" slot "c"', function() {
            document.querySelector('copy-value-test-obj-b').model.c.should.eql(newObj);
        });
        it('component "copy-value-test-obj-a" slot "b" indicate not a change of ' +
            'component "copy-value-test-obj-b" slot "c" ',
            function() {
                document.querySelector('copy-value-test-obj-a').model.c.value = 999;
                document.querySelector('copy-value-test-obj-b').model.c.should.eql(
                    document.querySelector('copy-value-test-obj-a').model.c);
            });
        it('change of newObj not indicate a change of value of "copy-value-test-comound-obj" slot "cc"',
            function() {
                retObj.should.be.eql(newObj);
            });

    });
});

