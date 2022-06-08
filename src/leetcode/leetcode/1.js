/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 普通解法
  // 268ms / 41M 
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  // 优化，不比较相同的元素
  // 104ms / 41.2M
  // 时间复杂度：O(N^2)，其中 N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次
  // 空间复杂度：O(1)
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }

  // 优化2：hash 表
  // 60 ms / 41.7 MB
  // 时间复杂度：O(N)，其中 N 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 地寻找 target - x。
  // 空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。
  let len = nums.length;
  let obj = {} // js 直接用对象代替 hash 表
  for (let i = 0; i < len; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [i, obj[target - nums[i]]]
    }
    obj[nums[i]] = i
  }
};