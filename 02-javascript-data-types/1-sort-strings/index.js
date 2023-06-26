/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
    
  const LOCALE_OPTIONS = {
    caseFirst: 'upper',
  };

  const sortedLanguages = arr.reduce(reduceStringsByLanguage, {});

  const sortedStrings = Object.entries(sortedLanguages)
                          .map(sortStrings)
                          .reduce((arrays, array) => arrays.concat(array), []);

  return param === 'asc' ? sortedStrings : sortedStrings.reverse();

  // helper functions
    
  function sortStrings([language, strings]) {
    return strings.sort((a, b) => a.localeCompare(b, language, LOCALE_OPTIONS));
  }

  function reduceStringsByLanguage(cache, currentString) {
    const language = detectLanguage(currentString[0]);

    if (!cache[language]) {
      cache[language] = [];
    }

    cache[language].push(currentString);

    return cache;
  }

  function detectLanguage(char) {
    let charCode = char.charCodeAt();

    return ((charCode >= 1040 && charCode <= 1103) || charCode === 1025 || charCode === 1105) ? 'ru' : 'en';
  }
    
}