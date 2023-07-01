/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  path = path.split('.');

  let pathIndex = 0;

  const traverseObj = obj => {
    const child = obj[path[pathIndex]];
      
    if (typeof child === "object") return (++pathIndex && traverseObj(child));
    
    return (setTimeout(() => pathIndex = 0) && child)
  };

  return traverseObj;
}
