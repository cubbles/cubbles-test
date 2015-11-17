'use strict';
describe('copy-value', function() {
    this.timeout(5000);
    before(function(done) {
        document.body.addEventListener('cifReady', function() {
            done();
        });
    });
    after(function() {

    });
    beforeEach(function() {

    });
    afterEach(function() {

    });

    describe('copy-value-test-obj-a/a -> copy-value-test-obj-b/a', function() {

        var obj;
        beforeEach(function() {
            obj = document.querySelector('copy-value-test-obj-a').model.a;
        });

        it('change the value of copy-value-test-obj-a/a not changes the value of copy-value-test-obj-b/b', function() {
            obj.value = -1;
            document.querySelector('copy-value-test-obj-a').model.a.should.eql(obj);
            document.querySelector('copy-value-test-obj-b').model.a.should.not.eql(obj);
            document.querySelector('copy-value-test-obj-a').model.a.should.not.eql(
                document.querySelector('copy-value-test-obj-b').model.a);
        });
    });
    describe('copy-value-test-obj-a/b -> copy-value-test-obj-b/b', function() {
        var obj;
        beforeEach(function() {
            obj = document.querySelector('copy-value-test-obj-a').model.b;
        });

        it('change the value of copy-value-test-obj-a/b not changes the value of copy-value-test-obj-b/b', function() {
            obj.value = 8888;
            document.querySelector('copy-value-test-obj-a').model.b.should.eql(obj);
            document.querySelector('copy-value-test-obj-b').model.b.should.not.eql(obj);
            document.querySelector('copy-value-test-obj-a').model.b.should.not.eql(
                document.querySelector('copy-value-test-obj-b').model.b);
        });
    });
    describe('copy-value-test-obj-a/c -> copy-value-test-obj-b/c', function() {
        var obj;
        beforeEach(function() {
            obj = document.querySelector('copy-value-test-obj-a').model.c;
        });

        it('change the value of copy-value-test-obj-a/c changes the value of copy-value-test-obj-b/c', function() {
            obj.value = 'new string';
            document.querySelector('copy-value-test-obj-a').model.c.should.eql(obj);
            document.querySelector('copy-value-test-obj-b').model.c.should.eql(obj);
            document.querySelector('copy-value-test-obj-a').model.c.should.eql(
                document.querySelector('copy-value-test-obj-b').model.c);
        });
    });
    //describe('copy-value-test-obj-a/a -> copy-value-test-compound-obj/aa', function() {
    //
    //    beforeEach(function() {
    //        document.querySelector('copy-value-test-obj-a').model.a.value = 100;
    //    });
    //
    //    it('change the value of copy-value-test-obj-a/a not changes the value of copy-value-test-compound-obj/aa',
    // function() { document.querySelector('copy-value-test-obj-a').model.a.should.not.eql(
    // document.querySelector('copy-value-test-compound-obj').model.aa); }); }); describe('copy-value-test-obj-a/b ->
    // copy-value-test-compound-obj/bb', function() {  beforeEach(function() {
    // document.querySelector('copy-value-test-obj-a').model.b.value = 100; });  it('change the value of
    // copy-value-test-obj-a/b not changes the value of copy-value-test-compound-obj/bb', function() {
    // document.querySelector('copy-value-test-obj-a').model.b.should.not.eql(
    // document.querySelector('copy-value-test-compound-obj').model.bb); }); }); describe('copy-value-test-obj-a/c ->
    // copy-value-test-compound-obj/cc', function() {  beforeEach(function() {
    // document.querySelector('copy-value-test-obj-a').model.c.value = 'new String'; });  it('change the value of
    // copy-value-test-obj-a/c changes the value of copy-value-test-compound-obj/cc', function() { document.querySelector('copy-value-test-obj-a').model.c.should.eql( document.querySelector('copy-value-test-compound-obj').model.cc); }); }); describe('copy-value-test-compound-obj/aa -> copy-value-test-obj-a/a ', function() {  beforeEach(function() { document.querySelector('copy-value-test-compound-obj').model.aa.value = 100; });  it('change the value of copy-value-test-compound-obj/aa not changes the value of copy-value-test-obj-a/a', function() { document.querySelector('copy-value-test-compound-obj').model.aa.should.not.eql( document.querySelector('copy-value-test-obj-a').model.a); }); }); describe('copy-value-test-compound-obj/bb -> copy-value-test-obj-a/b', function() {  beforeEach(function() { document.querySelector('copy-value-test-obj-a').model.b.value = 100; });  it('change the value of copy-value-test-compound-obj/bb not changes the value of copy-value-test-obj-a/b', function() { document.querySelector('copy-value-test-compound-obj').model.bb.should.not.eql( document.querySelector('copy-value-test-obj-a').model.b); }); }); describe('copy-value-test-compound-obj/cc -> copy-value-test-obj-a/c', function() {  beforeEach(function() { document.querySelector('copy-value-test-compound-obj').model.cc.value = 'new String'; });  it('change the value of  copy-value-test-compound-obj/cc changes the value of copy-value-test-obj-a/c', function() { document.querySelector('copy-value-test-compound-obj').model.cc.should.eql( document.querySelector('copy-value-test-obj-a').model.c); }); });
});
