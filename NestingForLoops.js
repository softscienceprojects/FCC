function multiplyAll(arr) { // the function 'multiplyAll' takes the value 'arr'
  var product = 1; //assign product to 1
  for (var i =0; i<arr.length; i++) { // first loop looking at outer value of 'arr'
    for (var j=0; j<arr[i].length; j++) { //second loop looking deeper into 'arr', arr[i]
      var product = product * arr[i][j]; //reassign product to multiply itself, 1, against the items in the array
      // console.log(product);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1],[2],[3]]);


var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
