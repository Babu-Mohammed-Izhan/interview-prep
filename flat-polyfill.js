const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

// TOP DOWN APPROACH
Array.prototype.polyFlat = function (depth = 1) {
  let output = [];

  function flatten(arr, depth) {
    if (depth < 0) {
      output.push(arr);
      return output;
    }

    for (const a of arr) {
      if (Array.isArray(a)) {
        flatten(a, depth - 1);
      } else {
        output.push(a);
      }
    }
  }

  flatten(this, depth);

  return output;
};

// USING ORIGINAL
const ployFlatArr1 = arr.polyFlat(1);
const ployFlatArr2 = arr.polyFlat(2);

console.log("THIS IS DONE USING THE POLYFILL FLAT FUNCTION ");
console.log(ployFlatArr1);
console.log(ployFlatArr2);

// USING ORIGINAL
const flatArr1 = arr.flat(1);
const flatArr2 = arr.flat(2);

console.log("THIS IS DONE USING THE ORIGINAL FLAT FUNCTION ");
console.log(flatArr1);
console.log(flatArr2);
