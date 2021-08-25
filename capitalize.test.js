const capitalize = require('./capitalize');

test('1 word test', () => {
  expect(capitalize('test')).toBe('Test');
});