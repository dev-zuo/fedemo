
var chai = require('chai');
var expect = chai.expect;    // Using Expect style 添加 expect 支持
var should = chai.should();  // Using Should style 添加 should 支持

describe('Array', function() {
  describe('#indexOf()', function() {
    it('当 value 不存在时，应该返回 -1', function() {
      // chai should 断言
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
      [1, 2, 3].should.have.length(3);

      // chai expect 断言
      expect([1, 2, 3].length).to.equal(3);
      expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
      expect(undefined).to.be.an('undefined');
      expect(123).to.not.be.an('undefined');
      expect('abc').to.be.an('string');
      expect(2).to.greaterThan(0);
    });
  });
});