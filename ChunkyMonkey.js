/* Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns 
them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Break it up.

   var myArray= []; // new array

  //iterate the length of the original array, by the size of the desired array
  // ('to start each new group where the previous one ended')
  for (let i=0; i<arr.length; i += size) { 
  // create a new 'chunk' variable, which is the original array sliced from i (0)
    //to the end of the chunk's size
    let group = arr.slice(i, i+size);
    //push to your new array
    myArray.push(group);
  }
  console.log(myArray);
  //return the result
  return myArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
