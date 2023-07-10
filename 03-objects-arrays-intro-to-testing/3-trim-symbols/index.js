/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (size === 0 || !string.length) {
    return '';
  } else if (!size) {
    return string;
  }

  const splitStrings = str => {
    let strings = [];
    let currentString = str[0];

    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        currentString += str[i];
      } else {
        strings.push(currentString);
        currentString = str[i];
      }
    }

    strings.push(currentString);

    return strings;
  };

  return splitStrings(string).map(string => string.slice(0, size)).join('');
}
