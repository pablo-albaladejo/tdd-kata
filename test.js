const expect = require('expect.js');
const kata = require('./kata.js');

describe('is valid output', () => {
  it('is not null', () => {
    const result = kata.run();
    expect(result).to.not.equal(null);
  });
})
