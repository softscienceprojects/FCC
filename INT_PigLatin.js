/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */


function translatePigLatin(str) {
  var ourSolution = '';
  var pig = str.split(''); //split
  let myFirstVowels = /^[aeiou]/i;
  let allVowels = /[aeiou]/i;
  let firstVowel = str.match(myFirstVowels);
console.log(firstVowel);

  // Does it start with a vowel? Yes, add '-way'
  if (str.charAt(0)==firstVowel) {
    ourSolution = str + "way";
  }

  // Does not have a vowel? look through the word, find the first vowel! 
    else {
  // at what index are the values found? 
for (let i =0; i<str.length;i++) {
  if (str.charAt(i) == firstVowel) {

  }
};
  
  // take off the letters before the vowel



    // put them at the end

    // add -ay


    }


  
  
  console.log(ourSolution);
  return ourSolution;
}

translatePigLatin("paragraphs");
