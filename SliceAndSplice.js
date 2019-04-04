/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/



function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copyArr = arr2.slice();
  //copyArr.push(arr2);
  let myArray = arr2.slice(0, n).concat(arr1);
  copyArr.splice(n, 0, arr1);
 
  console.log(copyArr);
  return myArray;
}

frankenSplice([1, 2, 3], [4, 5], 1);
