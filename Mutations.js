/*
Return true if the string in the first element of the 
array contains all of the letters of the string in the 
second element of the array.
*/


function mutation(arr) {
  var origin = arr[0].toLowerCase().split(''); //made everything lowercase and split all letters into an array
  var lookup = arr[1].toLowerCase().split('');
  var check = true; //automatically set it to true;

  lookup.forEach(function(element) {
    if (origin.indexOf(element) === -1) { // this code only runs if there is an element not present
      console.log(origin.indexOf(element));
      check = false;  //resets the value of check to false;
    } 
  });
 return check;
}

mutation(["hello", "hey"]);
