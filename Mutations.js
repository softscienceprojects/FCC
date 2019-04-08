/*
Return true if the string in the first element of the 
array contains all of the letters of the string in the 
second element of the array.
*/


function mutation(arr) {
  var origin = arr[0];
  var emptyArr = "["+arr[1] +"+]";
  var checking = RegExp(emptyArr, "gi"); 
  console.log(checking);
  var found = checking.test(origin);
  console.log(found);
  var hardTest = /Aarmy/gi;
  console.log(hardTest.test(origin));
  return found;
}

mutation(["Mary", "Aarmy"]); 
