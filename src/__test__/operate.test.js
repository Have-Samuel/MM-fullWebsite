import calculate from '../components/calculator/logic/operate';

describe('the result should match', () => {
  test('3+3=6', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: '+',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('6');
  });
  test('3-3=0', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: '-',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('0');
  });
  test('3+3=6', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: '+',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('6');
  });
  test('3x3=9', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: 'x',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('9');
  });
  test('3%3=0', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: '%',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('0');
  });
  test('3÷3=0', () => {
    const object = {
      numberOne: 3,
      numberTwo: 3,
      operation: '÷',
    };
    const result = calculate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('1');
  });
});
