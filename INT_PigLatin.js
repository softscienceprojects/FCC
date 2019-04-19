function translatePigLatin(str) {
  var ourSolution = '';
  var pig = str.split(''); //split
  let myFirstVowels = /^[aeiou]/i;
    let firstVowel = str.match(myFirstVowels);
  let allMyVowels = /[aeiou]/i;
    let allVowels = str.match(allMyVowels);

  // Does it start with a vowel? Yes, add '-way'
  if (str.charAt(0)==firstVowel) {
    ourSolution = str + "way";
  }
  // Does not have a vowel? look through the word, find the first vowel! 
    else {
        // at what index are the values found? 
      for (let i =0; i<str.length;i++) {
        if (str.charAt(i) == allVowels) {
        // take off the letters before the vowel
          var consStart = str.slice(i-str.charAt(i), i);
          var consEnding = str.slice(i);
        } // put them at the end
      } ourSolution = consEnding + consStart+"ay";
    // add -ay
    }
  
  
  console.log(ourSolution);
  return ourSolution;
}

translatePigLatin("glove");
