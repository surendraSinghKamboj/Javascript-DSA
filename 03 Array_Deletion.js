let arr = [45, 67, 32, 10, 39, 52];
let deletePosition = 3;

function deleteItem(array, position) {
  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return array;
}
console.log(deleteItem(arr, deletePosition));
