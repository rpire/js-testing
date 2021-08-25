const reverseString = require('./reverse_string');
test('Reversed "Hola!', () => {
  expect(reverseString('Hola!')).toBe('!aloH');
});
test('Reversed "Welcome to the jungle"', () => {
  expect(reverseString('Welcome to the jungle')).toBe('elgnuj eht ot emocleW');
});