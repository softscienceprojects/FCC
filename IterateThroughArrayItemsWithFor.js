function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  // loop through the array
for (let i=0; i<arr.length; i++) {
  //if the element exists within the array - 
  if (arr[i].indexOf(elem) <0){
    // grab it and push that element to your new array
    newArr.push(arr[i]);
    //arr.splice(0,2,'flutes');
    //newArr = [...arr]
  }
}
  // change code above this line
  // return your new array
  return newArr;
}

// change code here to test different cases:
console.log([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2); // an array, then look for element '2'
// should return 'flutes', 4  
