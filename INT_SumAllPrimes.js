/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, 
one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var myNums = [];
  // > 1 & / by (num)
  // only divisible by 1 & itself

  for (let i =1; i<=num;i++) {
    if (i%i===0) {
      console.log(i);
    }
  }

  return num;
}

sumPrimes(10);
