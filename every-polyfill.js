// THE PLOYFILL
Array.prototype.everyPoly = function (callback) {
  let boolFlag = true;

  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      boolFlag = false;
    }
  }

  return boolFlag;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

// USING POLYFILL
const polyBool = arr.everyPoly((val) => {
  return val % 2 === 0;
});

// USING ORIGINAL
const everyBool = arr.every((val) => {
  return val % 2 === 0;
});

console.log(`POLYFILL EVERY FUNCTION ARRAY:::> ${arr}`);
console.log(polyBool);

console.log(`ORIGINAL EVERY FUNCTION ARRAY:::> ${arr}`);
console.log(everyBool);

const arr2 = [2, 4, 6];

// USING POLYFILL
const polyBool2 = arr2.everyPoly((val) => {
  return val % 2 === 0;
});

// USING ORIGINAL
const everyBool2 = arr2.every((val) => {
  return val % 2 === 0;
});

console.log(`POLYFILL EVERY FUNCTION ARRAY:::> ${arr2}`);
console.log(polyBool2);

console.log(`ORIGINAL EVERY FUNCTION ARRAY:::> ${arr2}`);
console.log(everyBool2);
