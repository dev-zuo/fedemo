
/**
 * @description 获取 TLV 编码字符串中某个 tag 对应的 value
 * @param {*} tag "31"
 * @param {*} encodeStr TLV 编码
 */
function getTlvValue(tag, encodeStr) {
    // 有现成 API：Number.parseInt(hexStr, 16)
    // const hexToVal = (hexStr) => {
    //     const getHexVal = (tempChar) => {
    //         let hexMap = {a: 10, b: 11, c: 12, d: 13, e: 14, f: 15}
    //         let val = hexMap[tempChar]
    //         return val !== undefined ? val : Number.parseInt(tempChar)
    //     }
    //     let count = 0
    //     for (let i = 0, len = hexStr.length; i < len; i++) {
    //         let hexVal = getHexVal(hexStr[i])
    //         count += hexVal * Math.pow(16, hexStr.length - i - 1)
    //     }
    //     return count
    // }
    let i = 0
    // "0123456789" index
    // "32 01 00 AE 90 02 00 01 02 30 03 00 AB 32 31 31 02 00 32 33 33 01 00 CC"
    while(i < encodeStr.length) {
        let tagValue = encodeStr.substring(i + 0, i + 2) // "32"
        // let lenWithHex = encodeStr.substring0(i + 3, i + 5) + encodeStr.substring(i + 6, i + 8) // 大端序 "01 00"
        let lenWithHex = encodeStr.substring(i + 6, i + 8) + encodeStr.substring(i + 3, i + 5) // 小端序 "01 00"
        let len = Number.parseInt(lenWithHex, 16)
        // let len = hexToVal(lenWithHex)
        if (tagValue === tag) {
            let value = encodeStr.substring(i + 9, i + 9 + len * 3).trim() // 去掉末尾空格
            return value
        }
        i = i + 9 + len * 3
    }
}

let str = "32 01 00 AE 90 02 00 01 02 30 03 00 AB 32 31 31 02 00 32 33 33 01 00 CC"
console.log(`'${getTlvValue('32', str)}'`)
console.log(`'${getTlvValue('90', str)}'`)
console.log(`'${getTlvValue('30', str)}'`)
console.log(`'${getTlvValue('31', str)}'`)
console.log(`'${getTlvValue('33', str)}'`)
// 'AE'
// '01 02'   
// 'AB 32 31'
// '32 33'
// 'CC'