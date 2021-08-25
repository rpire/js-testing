const stringLength = require('./string_length');
test('Characters in "Hello!"', () => {
  expect(stringLength('Hello!')).toBeTruthy();
});
test('Characters in "I love Barquisimeto"', () => {
  expect(stringLength('I love Barquisimeto')).toBeFalsy();
});
test('Empty string', () => {
  expect(stringLength('')).toBeFalsy();
});
test('Characters in "Sayounara"', () => {
  expect(stringLength('Sayounara')).toBeTruthy();
});