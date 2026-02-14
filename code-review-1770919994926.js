/**
 * Returns the sum of two numbers multiplied by 2.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers multiplied by 2.
 */
const doubleSum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  const result = a + (b * 2);
  if (result > Number.MAX_SAFE_INTEGER) {
    throw new Error('Result exceeds maximum safe integer value');
  }
  return result;
}

const result = doubleSum(12                    
  

console.log(`Result of two numbers is ${result}`);
