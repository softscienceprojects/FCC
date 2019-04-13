/* We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */


function sumAll(arr) {
  
  arr.sort((a,b) => a-b); // always sort smallest to biggest
  let a = arr[0], b = arr[1];
  var myArray = []
  

  while (a<=b) {
    myArray.push(a++)
  }

  let total = myArray.reduce((sum, item) => sum + item);
  console.log(total);
  return total;
}

sumAll([5, 10]);
