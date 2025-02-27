// Polyfill for for Each
Array.prototype.forEachPoly = function (callback) {
  let finalArr = [];

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

const polyArr = [1, 2, 3, 4, 5, 6, 7];

// USING POLYFILL
polyArr.forEachPoly((val) => {
  console.log("THIS IS DONE USING THE POLYFILL FOR EACH FUNCTION ");
  console.log(val);
});

const forEachArr = [1, 2, 3, 4, 5, 6, 7];

// USING ORIGINAL
forEachArr.forEach((val) => {
  console.log("THIS IS DONE USING THE ORIGINAL FOR EACH FUNCTION ");
  console.log(val);
});
