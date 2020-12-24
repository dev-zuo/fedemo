let assert = require('assert')
// describe('my suite', () => {
//   it('my test', () => {
//     // TypeError: this.timeout is not a function
//     this.timeout(1000);
//     assert.ok(true);
//   });
// });


describe('my suite', function() {
  beforeEach('some description', function() {
    // beforeEach:some description
    // console.log('xxx')
    throw 122;
  });
  it('my test', async function () {
    // TypeError: this.timeout is not a function
    // this.timeout(2000);
    assert.ok(true);
  });
  it('my test2', async function () {
    // TypeError: this.timeout is not a function
    // this.timeout(2000);
    assert.ok(true);
  });
});