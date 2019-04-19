function translatePigLatin(str) {
  var ourSolution = '';
  let allMyVowels = /[aeiou]/i;
    let allVowels = str.match(allMyVowels);

  // Does it start with a vowel? Yes, add '-way'
  if (str[0]==allVowels) {
    ourSolution = str + "way";
  }
  // Does not have a vowel? look through the word, find the first vowel! 
    else {
      for (let i =0; i<=str.length;i++) {
        console.log(str[i]);
        if (str[i] == allVowels) {
          var first = str.indexOf(str[i]);
        } 
      } ourSolution =  str.slice(first)+ str.slice(0, first) + "ay";
    }
  
  console.log(ourSolution);
  return ourSolution; 
}

translatePigLatin("bzzz");
