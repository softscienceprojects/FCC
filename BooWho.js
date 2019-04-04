// Check if a value is classified as a boolean primitive. Return true or false.


function booWho(bool) {

  if (typeof bool === "boolean" ) {
    return true;
  } return false;
}

booWho(false);

/* The magic of MDN docs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/
