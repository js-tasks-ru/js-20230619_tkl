/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr = []) {

  return Array.from(new Set(arr));

  // Еще одно решение, которое проходит, но является более громоздким
  // return arr.reduce((uniqueArr, item) => uniqueArr.includes(item) ? uniqueArr : ((uniqueArr.push(item)) && uniqueArr), []);
  
  // Решение, которое не проходит из-за сортировки через объект
  // return Object.values(arr.reduce((dict, item) => (dict[item] = item) && dict, {}));
}
