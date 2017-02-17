export const partial = (func, ...args) => func.bind(null, ...args);

const _pipe = (func1, func2) => (...args) => func2(func1(...args));

export const pipe = (...functions) => functions.reduce(_pipe);