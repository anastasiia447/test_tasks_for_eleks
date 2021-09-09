/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let first = Math.max(...numbers);
  numbers.splice(numbers.indexOf(first), 1);
  let second = Math.max(...numbers);
  return first + second;
}
