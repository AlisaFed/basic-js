const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let s1arr = Array.from(s1);
  let s2arr = Array.from(s2);
  let counter = 0;
      for (let i = 0; i < s1arr.length; i++) {
          if (s2arr.includes(s1arr[i])) {
              let removed = s2arr.splice(s2arr.indexOf(s1arr[i]),1);
              counter = counter + 1;
          }; 
      } return counter;
  }

module.exports = {
  getCommonCharacterCount
};
