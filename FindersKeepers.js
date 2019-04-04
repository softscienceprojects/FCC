/* The instructions were:

Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth 
test (second argument). If no element passes the test, return 
undefined.

*/


function findElement(arr, func) {
  let num = 0; // this was provided
  
  //At first I was trying to use map but filter was much cleaner
  
  //create a new array and apply filter, with func as your callback
  var newArray = arr.filter(func);
  console.log(newArray[0]);
  
  //We only need the first item so 0 index
  return newArray[0];

}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
