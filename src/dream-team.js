const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (Array.isArray(members) == true) {
      const onlystring = members.filter( item => typeof item == 'string');
          if (onlystring.length > 0) {
              const clearstring = onlystring.map(item => item.trim());
              const sortedmembers = clearstring.sort(function (a, b) {
                  return a.toLowerCase().localeCompare(b.toLowerCase());
              });
              const teamDream = (sortedmembers.map(item => item.charAt(0))).toString();
              const finaly = teamDream.replace(/[\s.,%]/g, '').toUpperCase();
              return(finaly);
          } else {
            return(false)};
  } else {
    return(false)};
}

module.exports = {
  createDreamTeam
};
