import {partial, pipe} from './utils'

const add = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;
const increment = (num) => num + 1;
const double = (num) => num * 2;

test('partial applies the first argument ahead of time', () => {
    const inc = partial(add, 1);
    const result = inc(2);
    expect(result).toBe(3);
});

test('partial applies the multiple argument ahead of time', () => {
    const inc = partial(addThree, 1, 3);
    const result = inc(2);
    expect(result).toBe(6);
});

test('pipe passes the result of increment to double', () => {
    const pipeline = pipe(increment, double);
    const result = pipeline(2);
    expect(result).toBe(6);
});

test('pipe passes the result of double to increment', () => {
    const pipeline = pipe(double, increment);
    const result = pipeline(2);
    expect(result).toBe(5);
});

test('pipe works with more than 2 functions', () => {
    const pipeline = pipe(add, increment, double, increment);
    const result = pipeline(1, 2); //
    expect(result).toBe(9);
});

