function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var regexConstructor = new RegExp(target + "$");  // turn the target -- input from the function into a regular expression using a constructor
  console.log(regexConstructor);

const answer = regexConstructor.test(str); // store the answer in a variable
// apply 'test' (so you just get true or false) onto your RegEx. Use it to test the string, the variable str
 
console.log(answer);
return answer;

//return the answer!

}

confirmEnding("Connor", "n");
