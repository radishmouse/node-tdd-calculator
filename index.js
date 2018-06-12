// console.log('Hello Node! Can we be friends?');

// const add = (num1, num2) => {
//   return num1 + num2;
// };
const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

// const arithmetic = {
//   add: add,
//   sub: sub
// };
const arithmetic = {
  add,
  sub
};

module.exports = arithmetic;


