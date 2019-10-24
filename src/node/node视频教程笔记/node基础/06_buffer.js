
// 操作二进制值，需要使用Buffer
const buf1 = Buffer.alloc(10)
console.log(buf1)
// 10个字节
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// 00   16进制数，代表一个字节

const buf2 = Buffer.from('a')
console.log(buf2, buf2.toString()) // <Buffer 61> 'a'

const buf3 = Buffer.from('中文')
console.log(buf3) // <Buffer e4 b8 ad e6 96 87>

// 拼接两个buffer
const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())
// <Buffer 61 e4 b8 ad e6 96 87> 'a中文'