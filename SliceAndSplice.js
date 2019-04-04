/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/



function frankenSplice(arr1, arr2, n) {   // function parameters
  // It's alive. It's alive!
  var copyArr = arr2.slice();  // slice array 2 into your empty array (slice makes a copy)
  
  for (let i = 0; i<arr1.length; i++) { // for loop the entire length of the 1st array
    copyArr.splice(n, 0, arr1[i]);  // splice (mutable) at nth index, take out 0 items, add in each arr1 item
    n++; //increment
  }
  console.log(copyArr);
  return copyArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);
