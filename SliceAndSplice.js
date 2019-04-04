/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/



function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var myArray = arr2.slice(0, n)// .concat(arr1);
  var scary = arr2.slice(n, arr2.length);
  myArray.push(arr1, scary);
  
  console.log(myArray);
  return myArray;
  
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); 




// "head", "shoulders", "claw", "tentacle", "knees", "toes"
