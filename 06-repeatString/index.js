/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */

 function me(letter, count){
	let nstr = '';
  nstr = nstr.concat(letter.toUpperCase());
  for(let i = 0; i < count; i++){
    	nstr = nstr.concat(letter.toLowerCase());
  }
  return nstr;
}

export const repeatString = (str = '') => {

    let mstr = '';
  for(let i = 0; i < str.length; i++){
  	mstr = mstr.concat(me(str[i], i));
      	mstr = mstr.concat('-');
  }
  mstr = mstr.substring(0, mstr.length - 1);
	return mstr;
}
