/*
Flatten a nested array. You must account for varying levels of nesting. 
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby

//  var newArr = [] 
//  for (let i = 0; i<arr.length; i++) {
//    newArr.concat(arr[i])
//  }
//  console.log(newArr)

  // var newArray = Array.prototype.concat.apply([], arr);
  // console.log(newArray);
  //  return newArray

  var newArray = arr.flat(arr.length);
  return newArray
}

steamrollArray([1, [], [3, [[4]]]]);
