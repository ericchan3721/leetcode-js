/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    const myMap = [];
    nums.forEach((n, idx) => myMap.push({ [n]: idx }));
    for (let i = 0; i < nums.length; ++i) {
        let secondNum = target - nums[i];
        const secondNumObj = myMap.slice(i + 1).find(n => n[secondNum]);
        const secondNumIdx = secondNumObj ? Object.values(secondNumObj)[0] : null;
        if (secondNumObj && secondNumIdx !== i) {
            result[0] = i;
            result[1] = secondNumIdx;
            break;
        }
    }
    return result;
};
