/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/


function convertHTML(str) {
  var findChar = /[&<>"'{1,}]/;
  console.log(findChar);
  var replace = str.match(findChar);
  console.log(replace)
  var re = new RegExp(replace,"g");
  var newStr = str;

  // find out which one it is, then replace it
 
  if (replace == "&" ) {
    newStr = str.replace(re, "&amp;");
    }
  if (replace == "<" ) {
    newStr =  str.replace(re, "&lt;");
    }
  if (replace == ">" ) {
    newStr =  str.replace(re, "&gt;");
    }
  if (replace == "\"") {
    newStr = str.replace(re, "&quot;")
  }  
  if (replace == "'") {
    newStr = str.replace(re, "&apos;")
  }
  return newStr;

    

}

convertHTML("<>");
