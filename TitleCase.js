/* Return the provided string with the first letter of each 
word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize 
connecting words like "the" and "of". */



function titleCase(str) {
  const mine = str.toLowerCase(); //first make everything lowercase
  var sz = mine.split(' '); // then split each word into individual array items
  var mA = []; // an empty array

sz.forEach(function(element) { //run a function on each element in the array 
   mA.push(element.charAt(0).toUpperCase() + element.slice(1)); //Flavio Copes method for capitalising each item, then push it to the array
});
 return mA.join(' '); //join it back together
  
};

titleCase("sHoRt AnD sToUt");



/* This took me ages and I had to have a look at the one of the hints to work out to first make 
EVERYTHING lower case and then just make the first letter uppercase. 

I still ended up solving it a bit differently as I was set on using 'forEach' and didn't want to use .replace()

Making the first letter uppercase courtesy of Flavio Copes
https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
*/
