/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj = undefined) {

  // Функция принимает объект, свойства которого могут быть **только** примитивными значениями
  const validatePrimitive = value => {
    const primitiveTypes = ['string', 'number', 'symbol', 'boolean', 'undefined', 'bigint'];

    if (!(value === null || primitiveTypes.includes(typeof value))) {
      throw new TypeError("Value must be a primitive");
    }

    return value;
  };

  return  obj === undefined ? undefined :
          Object.fromEntries(Object.entries(obj).map(([key, value]) => [validatePrimitive(value), key]));
}
