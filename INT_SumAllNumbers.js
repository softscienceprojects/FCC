/* We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */


function sumAll(arr) {
  
  arr.sort((a,b) => a-b); // always sort smallest to biggest
  let a = arr[0], b = arr[1]; // declare them as variables, with the first item and the last item
  var myArray = [] //create an empty array
  

  while (a<=b) { // while a is less than or equal to b
    myArray.push(a++) //push each number onto your array
  }

  let total = myArray.reduce((sum, item) => sum + item); // use reduce to sum each item in the array
  console.log(total);
  return total;
}

sumAll([5, 10]);
