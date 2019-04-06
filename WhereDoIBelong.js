/* Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been 
sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it 
is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the 
array has been sorted it will look like [3,5,20] and 19 is less than 
20 (index 2) and greater than 5 (index 1).
*/




function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //sort the array small to large

  arr.sort((a,b) => a-b); // have to use this method for sorting otherwise JS thinks #'s go 1,10,2, etc. 
  //by default .sort sorts as strings (alphabetical) so pass in *compare function* 

  for (let i=0;i<arr.length;i++) { //loop through your array 
    if (num<=arr[i]) { //compare each item in the array. Is Num <= to the arr item?
    //console.log(arr.indexOf(arr[i]));
    return arr.indexOf(arr[i]); //then return the index of where the array item is
    }
  }
  return arr.length; //OUTSIDE OF THE SCOPE -- just return the length of the array
}

getIndexToIns([2, 5, 10], 15); 
