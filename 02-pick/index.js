/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    if(fields.length){
        const be = {};
            for(let i = 0; i < fields.length; i++){
              if(obj.hasOwnProperty(fields[i])){
                  be[fields[i]] = obj[fields[i]];
              }	
            }
          return be;
        }
        else return{}
};
