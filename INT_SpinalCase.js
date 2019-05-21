function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var newStr = str.toLowerCase();
  
  let codingRegex = /\s/g
  let result = newStr.replace(codingRegex, "-");
  console.log(result);

  return result;
}

spinalCase('This Is Spinal Tap');
