function translatePigLatin(str) {
  var ourSolution = [];
  var pig = str.split(''); //split
  let allMyVowels = /[aeiou]/i;
    let allVowels = str.match(allMyVowels);

  // Does it start with a vowel? Yes, add '-way'
  if (pig[0]==allVowels) {
    ourSolution.push(str, "way");
  }
  // Does not have a vowel? look through the word, find the first vowel! 
    else {
      for (let i =0; i<=pig.length;i++) {
        if (pig[i] == allVowels) {
          ourSolution.push(pig.slice(pig[i-1], i));
          break;
        } console.log(ourSolution);
          console.log(pig[i])
      } 
    }
  
  ourSolution = ourSolution.join('');
  console.log(ourSolution);
  return ourSolution; 
}

translatePigLatin("california");
