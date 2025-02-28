// THE POLYFILL
Array.prototype.mapPoly = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

// USING POLYFILL
const polyArr = arr.mapPoly((val) => {
  return (val += 1);
});

console.log("THIS IS DONE USING THE POLYFILL MAP FUNCTION ");
console.log(polyArr);

// USING ORIGINAL
const mapArr = arr.map((val) => {
  return (val += 1);
});

console.log("THIS IS DONE USING THE ORIGINAL MAP FUNCTION ");
console.log(mapArr);
