let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let find = 610;

function search(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return {
        index: i,
        item,
      };
    }
  }
  return {
    massage:"Searched item not found in given array"
  };
}

let result = search(arr, find);
console.log(result);
