function largestOfFour(arr) {
  
  var ell = [];  // create an empty array outside the scope of the loop to push to
  
  for (let i=0;i<arr.length;i++) { //for loop to loop through each item within the arrays
    ell.push(Math.max(...arr[i])); //push the maximum value
   
  }
  return ell; //return our new array
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
