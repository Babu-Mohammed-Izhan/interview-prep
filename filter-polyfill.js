Array.prototype.filterPoly = function (callback) {
  let finalArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      finalArr.push(this[i]);
    }
  }

  return finalArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

// USING POLYFILL
const polyArr = arr.filterPoly((val) => {
  return val % 2 === 0;
});

// USING ORIGINAL
const filterArr = arr.filter((val) => {
  return val % 2 === 0;
});

console.log("THIS IS DONE USING THE POLYFILL FILTER FUNCTION ");
console.log(polyArr);

console.log("THIS IS DONE USING THE ORIGINAL FILTER FUNCTION ");
console.log(filterArr);
