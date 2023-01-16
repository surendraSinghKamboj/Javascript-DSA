let arr=[3,45,57,45,21,30,12,6,81,21,78];
let newElement="sunnu";
let position=4;

function insert(array,element,position){
  for (let i = array.length; i > position; i--) {
    array[i] = array[i-1];
  }
  array[position] = element;
  return array;
}
let result = insert(arr,newElement,position);
console.log(result);
