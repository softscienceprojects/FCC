/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  function isBigEnough(value) {  // I used the main example from MDN docs
    value = value || 0; //converting to falsy values
    if (value == false) { //if it passes the test of being falsy
      return false
    } return true; //else
}

  var filtered = arr.filter(isBigEnough); //run filter on the inputted array
  console.log(filtered);
  return filtered; //return it!
}

bouncer([false, null, 0, NaN, undefined, ""]);



/* from the hint I was able to find this on stackoverflow: 
https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascript

and of course filter from MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/
