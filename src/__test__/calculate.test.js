import calculate from '../components/calculator/logic/calculate';

describe('the result should match', () => {
  test('2+3=5', () => {
    const object = {
      total: 2,
      next: 3,
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('5');
  });
  test('5-3=2', () => {
    const object = {
      total: 5,
      next: 3,
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('2');
  });
  test('2x3=6', () => {
    const object = {
      total: 2,
      next: 3,
      operation: 'x',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('6');
  });
  test('6÷3=2', () => {
    const object = {
      total: 6,
      next: 3,
      operation: '÷',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('2');
  });
  test('2%2=0', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '%',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('0');
  });
});
