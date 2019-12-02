/**
 * Combines every list in $lists into a single list of sub-lists.
 * Each element in the returned list contains all the elements at that position in $lists. The returned list is as long as the shortest list in $lists.
 * The returned list is always comma-separated and the sub-lists are always space-separated.
 * This is a rewrite of zip scss function (see: https://sass-lang.com/documentation/modules/list#zip)
 * @param list
 * @returns {[]}
 * @example
 * zip(['10px', '50px', '100px'], ['short', 'mid']); // [['10px', 'short'], ['50px', 'mid']]
 */
export function zip(...list) {
  let shortest = 0;
  list.forEach((l) => {
    if (l instanceof Array) {
      if (!shortest || l.length < shortest) {
        shortest = l.length;
      }
    }
  });
  const res = [];
  for (let i = 0; i < shortest; i += 1) {
    res[i] = [];
    let ind = 0;
    list.forEach((l) => {
      res[i][ind] = l[i];
      ind += 1;
    });
  }
  return res;
}

/**
 * Utility generator
 * Used to generate utilities & print utilities
 * @param {object} utility - an utility object to process
 * @param {string} [infix=""] - infix (eg: -media, -sm, -md, ...)
 * @returns {string} css - the css for utilities
 */
export function generateUtility(
  utility,
  infix = '',
) {
  let { values, property: properties } = utility;

  if (values instanceof Array) {
    values = zip(values, values);
  }

  // Multiple properties are possible, for example with vertical or horizontal margins or paddings
  if (typeof properties === 'string') {
    properties = [properties];
  }

  const classList = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of values) {
    let propertyClass = utility.hasOwnProperty('class') ? utility.class : properties[0];
    propertyClass = !propertyClass ? '' : propertyClass;

    const infixFinal = propertyClass === '' && infix[0] === '-' ? infix.slice(1) : infix;


    // Don't prefix if value key is null (eg. with shadow class)
    // eslint-disable-next-line no-nested-ternary
    const propertyClassModifier = key !== null
      ? (propertyClass === '' && infixFinal === '' ? '' : '-') + key
      : '';
    classList.push(`.${propertyClass}${infixFinal}${propertyClassModifier} {
      ${properties.map((property) => `${property}: ${value} !important;`).join('\n')}
    }`);
  }
  return classList.join('\n');
}
