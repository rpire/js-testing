const capitalize = require('./capitalize');

test('1-word test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('5-word test', () => {
  expect(capitalize('this is just a test')).toBe('This is just a test');
});