/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    for(let i = 0; i < fields.length; i++ ){
        delete obj[fields[i]];
    }
    return obj;
};
