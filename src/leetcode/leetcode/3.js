/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //   if (s.length <= 1) {
  //     return s.length
  //   }
  //   let maxLen = 0;
  //   const hasRepeat = (str) => {
  //     let charCountObj = {}
  //     for (let i = 0, len = str.length; i < len; i++) {
  //       let item = str[i]
  //       if (charCountObj[item]) {
  //         return true
  //       } else {
  //         charCountObj[item] = 1
  //       }
  //     }
  //     return false
  //   }
  //   for (let i = 0; i < s.length; i++) {
  //     for (let j = i + 1; j <= s.length; j++) {
  //       let str = s.substring(i, j + 1);
  //       if (maxLen >= str.length || hasRepeat(str)) {
  //         continue
  //       }
  //       maxLen = str.length
  //     }
  //   }
  //   return maxLen

  // 加缓存
  // if (s.length <= 1) {
  //   return s.length
  // }
  // let maxLen = 0;
  // let cacheHasRepeat = {} // 缓存之前已经判重后的结果
  // const hasRepeat = (str) => {
  //   // 如果有缓存直接使用缓存结果，减少重复遍历
  //   if (cacheHasRepeat[str] !== undefined) {
  //     return cacheHasRepeat[str]
  //   }
  //   let charCountObj = {}
  //   for (let i = 0, len = str.length; i < len; i++) {
  //     let item = str[i]
  //     if (charCountObj[item]) {
  //       cacheHasRepeat[str] = true // 缓存结果
  //       return true
  //     } else {
  //       charCountObj[item] = 1
  //     }
  //   }
  //   cacheHasRepeat[str] = false // 缓存结果
  //   return false
  // }
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j <= s.length; j++) {
  //     let str = s.substring(i, j + 1);
  //     if (maxLen >= str.length || hasRepeat(str)) {
  //       continue
  //     }
  //     maxLen = str.length
  //   }
  // }
  // return maxLen

  //   // 滑动窗口解法
  //   if (s.length <= 1) {
  //     return s.length
  //   }
  //   let longest = 0
  //   for (let i = 0, len = s.length; i < len; i++) {
  //       let charObj = { [s[i]]: 1 }
  //       let max = 1
  //       for (let j = i + 1; j < s.length; j++) {
  //           if (charObj[s[j]]) {
  //               break;
  //           } else {
  //               charObj[s[j]] = 1
  //               max++
  //           }
  //       }
  //      (max > longest) && (longest = max)
  //   }
  //   return longest

  // // 官方题解 - 哈希集合，记录每个字符是否出现过
  // // 80 ms, 45.6 MB
  // const occ = new Set();
  // const n = s.length;
  // // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  // let rk = -1, ans = 0;
  // for (let i = 0; i < n; ++i) {
  //     if (i != 0) {
  //         // 左指针向右移动一格，移除一个字符
  //         occ.delete(s.charAt(i - 1));
  //     }
  //     while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
  //         // 不断地移动右指针
  //         occ.add(s.charAt(rk + 1));
  //         ++rk;
  //     }
  //     // 第 i 到 rk 个字符是一个极长的无重复字符子串
  //     ans = Math.max(ans, rk - i + 1);
  // }
  // return ans;

  // 滑动窗口解法 - 优化
  if (s.length <= 1) {
    return s.length
  }
  let longest = 0
  let charSet = new Set()
  let rk = 1 // 右指针 index
  for (let i = 0, len = s.length; i < len; i++) {
    // 第一次遍历，规规矩矩
    if (i === 0) {
      charSet.add(s[i], 1)
    } else {
      // 利用上一次结果
      charSet.delete(s[i - 1])
    }
    while (rk < len && !charSet.has(s.charAt(rk))) {
      charSet.add(s.charAt(rk), 1)
      rk++
    }
    ((rk - i) > longest) && (longest = rk - i)
  }
  return longest
};