// THE POLYFILL
Array.prototype.reducePoly = function (callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i]);
  }

  return value;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

// USING POLYFILL
const polyArr = arr.reducePoly((prev, curr) => {
  return prev + curr;
}, 0);

console.log("THIS IS DONE USING THE POLYFILL REDUCE FUNCTION ");
console.log(polyArr);

// USING ORIGINAL
const mapArr = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log("THIS IS DONE USING THE ORIGINAL REDUCE FUNCTION ");
console.log(mapArr);
