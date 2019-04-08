/*
Return true if the string in the first element of the 
array contains all of the letters of the string in the 
second element of the array.
*/


function mutation(arr) {
  var origin = arr[0].toLowerCase().split('');
  var lookup = arr[1].toLowerCase().split('');
  var check = true;

  lookup.forEach(function(element) {
    if (origin.indexOf(element) === -1) {
      console.log(origin.indexOf(element));
      check = false;
    } 
  });
 return check;
}

mutation(["hello", "hey"]);
