/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let mynum = [];
    mynum = numbers.split(' ');
    for(let i = 0; i < mynum.length; i++){
        mynum[i] = Number(mynum[i])
    }
      return  Math.min(...mynum) + " " + Math.max(...mynum);
}
