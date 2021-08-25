const Calculator = require('./calculator');

const calc = new Calculator;

describe('Addition', () => {
  test('2 + 7 = 9', () => {
    expect(calc.add(2, 7)).toBe(9);
  });

  test('54 + 108 = 162', () => {
    expect(calc.add(54, 108)).toBe(162);
  });

  test('Negative values', () => {
    expect(calc.add(-54, -108)).toBe(-162);
  });
});

describe('Subtraction', () => {
  test('15 - 8 = 7', () => {
    expect(calc.subtract(15, 8)).toBe(7);
  });

  test('8 - 15 = -7', () => {
    expect(calc.subtract(8, 15)).toBe(-7);
  })

  test('Negative values', () => {
    expect(calc.subtract(-77, -24)).toBe(-53);
  });
});

describe('Multiplication', () => {
  test('2 * 8 = 16', () => {
    expect(calc.multiply(2, 8)).toBe(16);
  });

  test('25 * 3 = 75', () => {
    expect(calc.multiply(25, 3)).toBe(75);
  });

  test('Multiply by 0', () => {
    expect(calc.multiply(7000, 0)).toBe(0);
  });
});

describe('Divition', () => {
  test('24 / 3 = 8', () => {
    expect(calc.divide(24, 3)).toBe(8);
  });

  test('15 / 5 = 3', () => {
    expect(calc.divide(15, 3)).toBe(5);
  });

  test('Negative divider', () => {
    expect(calc.divide(64, -16)).toBe(-4);
  });
});