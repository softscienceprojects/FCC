/*The instructions given were the following:

Truncate a string (first argument) if it is longer than the 
given maximum string length (second argument). Return the 
truncated string with a ... ending. 

*/



function truncateString(str, num) {
  // Clear out that junk in your trunk
console.log(num);
console.log(str.length);
if (num >= str.length) { //had to change to greater than 'or equal to' in order to get one of the tests to pass
  return str;
} else {
  //split the str into an array of all the letters
  var letters= str.split(''); 
  // slice them from index 0, up to the num, then join and add the ...
  return letters.slice(0,num).join('')+ "...";
  }
};

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
