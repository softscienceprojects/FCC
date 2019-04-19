/* Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
 //var newArr = [];
var newArr = arr1.concat(arr2);
var blank = [];

// var uniq = newArr.filter(function(item, index){
// 	return newArr.indexOf(item) < index;
// });

let uniq = newArr.filter(elm => {
  return arr2.indexOf(elm) > -1 && arr1.indexOf(elm) > -1 ? true : false;
})
// let setArr = new Set([...newArr]);

  // function inFirst (fir, sec) { 
  //   for (let i=0;i<fir.length; i++) {
  //     if (sec.indexOf(fir[i]) === -1) {
  //         console.log(fir[i]);
  //       newArr.push(fir[i]);
  //     }
  //   }
  // }
  // inFirst(arr1, arr2);
  // inFirst(arr2, arr1);

  console.log(uniq);
  console.log(newArr);
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
