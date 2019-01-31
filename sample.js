const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const add2 = x => x + 2;
const square = x => x * x;
const addMany = [1, 3, 8, 10, 7].map(
  compose(
    square,
    add2,
  ),
);

console.log(addMany);

const logSomething = options => ({
    ...options,
    anotherOption: 'Hello!'
});
const options = logSomething({ one: '1', two: '2' });
console.log(options);
