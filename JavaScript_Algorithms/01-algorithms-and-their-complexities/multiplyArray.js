/**'
 * Multiply all values of the array by certain value with allocation
 * of additional memory to prevent input array modification.
 * 
 * Example:
 * array = [1, 2, 3]
 * multiplier = 2
 * output = [2, 4, 6]
 * 
 * @param {number[]} array
 * @param {number} multiplier
 * @return {number[]}
 */
export function multiplyArray(array, multiplier) {
    const multiplyArray = [...array];

    for (let i = 0; i < multiplyArray.length; i += 1) {
        multiplyArray[i] *= multiplier;
    }

    return multiplyArray;
}