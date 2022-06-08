/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // let result = {}
  // let rest = 0
  // const insertNode = (val) => {
  //     // 链表为空时
  //     if (Object.keys(result).length === 0) {
  //         result.val = val
  //         result.next = null
  //         return 
  //     }
  //     let temp = result
  //     while(temp.next) { // 找到链表最后一个元素
  //         temp = temp.next
  //     }
  //     // 插入数据
  //     temp.next = { val: val, next: null }
  // }
  // const calcResult = (val) => {
  //     // 没有进位
  //     if (rest + val < 10) {
  //         insertNode(val + rest)
  //         rest = 0
  //     } else {
  //         // 有进位
  //         insertNode(val + rest - 10)
  //         rest = 1
  //     }
  // }
  // while(l1 || l2) {
  //     if (l1 && l2) {
  //         // l1、l2 都有值
  //         calcResult(l1.val + l2.val)
  //         l1 = l1.next
  //         l2 = l2.next
  //     } else if (l1 && !l2){
  //         // l1 比 l2 长，仅剩 l1 了
  //         calcResult(l1.val)
  //         l1 = l1.next
  //     } else {
  //         // l2 比 l1 长，仅剩 l2 了
  //         calcResult(l2.val)
  //         l2 = l2.next
  //     }
  // }
  // // 如果还有进位
  // if (rest !== 0) {
  //     insertNode(rest)
  // }
  // // console.log(result)
  // return result

  // // 官方参考题解 
  // let head = null, tail = null;
  // let carry = 0;
  // while (l1 || l2) {
  //   const n1 = l1 ? l1.val : 0;
  //   const n2 = l2 ? l2.val : 0;
  //   const sum = n1 + n2 + carry;
  //   if (!head) {
  //     head = tail = new ListNode(sum % 10);
  //   } else {
  //     tail.next = new ListNode(sum % 10);
  //     tail = tail.next;
  //   }
  //   carry = Math.floor(sum / 10);
  //   if (l1) {
  //     l1 = l1.next;
  //   }
  //   if (l2) {
  //     l2 = l2.next;
  //   }
  // }
  // if (carry > 0) {
  //   tail.next = new ListNode(carry);
  // }
  // return head;

  // 根据题解后自己的写法
  // 88ms / 46.3M
  let head = null, tail = null, carry = 0
  while (l1 || l2) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = val < 10 ? 0 : 1
    val = val % 10
    if (!head) {
      head = tail = { val, next: null }
    } else {
      tail.next = { val, next: null }
      tail = tail.next
    }
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next)
  }
  (carry !== 0) && (tail.next = { val: carry, next: null })
  return head
};