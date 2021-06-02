const assert = require('assert');
const number_format = require(__dirname+'/../src/number-format.js');

describe('number_format', function() {
  it('Number only', function() {
    assert.strictEqual(number_format(123456789), "123,456,789");
    assert.strictEqual(number_format(-123456789), "-123,456,789");
  });

  it('Auto round', function() {
    assert.strictEqual(number_format(123456789.123, 2), "123,456,789.12");
    assert.strictEqual(number_format(123456789.125, 2), "123,456,789.13");
    assert.strictEqual(number_format(123456789.4), "123,456,789");
    assert.strictEqual(number_format(123456789.5), "123,456,790");

    assert.strictEqual(number_format(-123456789.123, 2), "-123,456,789.12");
    assert.strictEqual(number_format(-123456789.125, 2), "-123,456,789.13");
    assert.strictEqual(number_format(-123456789.4), "-123,456,789");
    assert.strictEqual(number_format(-123456789.5), "-123,456,790");
  });

  it('Adding zeros to decimals', function() {
    assert.strictEqual(number_format(123456789, 2), "123,456,789.00");
    assert.strictEqual(number_format(-123456789, 2), "-123,456,789.00");
    assert.strictEqual(number_format(123456789.5, 2), "123,456,789.50");
    assert.strictEqual(number_format(-123456789.5, 2), "-123,456,789.50");
  });

  it('Decimals point and thousands separator', function() {
    assert.strictEqual(number_format(123456789.55, 2, ',', ' '), "123 456 789,55");
    assert.strictEqual(number_format(-123456789.55, 2, ',', ' '), "-123 456 789,55");
  });

  it('Negative zero', function() {
    assert.strictEqual(number_format(-0.00005, 2), "0.00");
    assert.strictEqual(number_format(-0.00005), "0");
  });
});