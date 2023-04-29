function hasTargetSum(array, target) {
  // Write your algorithm here
  const complements = new Set();

  for (let i = 0; i < array.length; i++) {
    if (complements.has(array[i])) {
      return true;
    }

    complements.add(target - array[i]);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  My function Big O notion is o(n) because it has a for loop that iterates through the array
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I create a Set called complements to store the complements of the numbers we've seen so far. 
  A complement is the number that, when added to the current number, gives us the target value.
 Then iterate through the array and for each number, we check if its complement is already in the complements Set. 
 If it is, we know that we have found two numbers that add up to the target, so we return true.
If the complement is not in the Set, we add the difference between the target and the current number to the Set, so that we can check for it later in the iteration.
If we reach the end of the loop without finding a pair of numbers that add up to the target, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
