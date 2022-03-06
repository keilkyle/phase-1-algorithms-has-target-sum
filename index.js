function hasTargetSum(array, target) {
  let final = 0
  for (number in array) {
    let answer = target - array[number]
    let otherNumbers = [...array]
    otherNumbers[number] = ""
    final += otherNumbers.includes(answer)*1
  }
  return !!final
}

/* 
  O(n^2)
*/

/* 
Do this for every X in the array:
- Target value minus X is the "answer" number we're looking for
- Create a new array that has all the values from the original array other than X
- Check if "answer" matches any numbers in new array
- If yes, ever, return true
- If always no, return false
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
