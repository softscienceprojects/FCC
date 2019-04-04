function repeatStringNumTimes(str, num) {
  // repeat after me
  
  // I might look up if there's another solution to this, but could only think of using a loop
 
var i = 0; // start with 0
var text = ""; //empty 'text' (as per W3)

// while because it loops through a block of code **as long as a specified condition is true**.
  while(i<num) { //while i is less than the num
    text += str;  // your empty text becomes the str
    i++; //increment
  }
  console.log(text);
  return text //return text
};

repeatStringNumTimes("abc", -2);
