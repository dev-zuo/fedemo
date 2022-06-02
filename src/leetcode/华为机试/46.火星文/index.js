/*
已知火星人使用的运算符号为#;$
其与地球人的等价公式如下
x#y=2*x+3*y+4
x$y=3*x+y+2
x y是无符号整数
地球人公式按照c语言规则进行计算
火星人公式中$符优先级高于#相同的运算符按从左到右的顺序运算

输入描述：
火星人字符串表达式结尾不带回车换行
输入的字符串说明是 字符串为仅有无符号整数和操作符组成的计算表达式

1.用例保证字符串中操作数与操作符之间没有任何分隔符
2.用例保证操作数取值范围为32位无符号整数，
3.保证输入以及计算结果不会出现整型溢出
4.保证输入的字符串为合法的求值报文
例如: 123#4$5#76$78
5.保证不会出现非法的求值报文
例如: #4$5 这种缺少操作数
    4$5#  这种缺少操作数
    4#$5  这种缺少操作数
    4 $5  有空格
    3+4-5*6/7 有其他操作符
    12345678987654321$54321 32位整数溢出

输出描述：
    根据火星人字符串输出计算结果
    结尾不带回车换行

案例1：
输入：
7#6$5#12
输出：
226

说明 示例7#6$5#12=7#(3*6+5+2)#12
                =7#25#12
                =(2*7+3*25+4)#12
                =93#12
                =2*93+3*12+4
                =226
*/
function getResult(marsStr) {
    // x$y
    let dollarCalc = (x, y) => {
        console.log('dollarCalc', x, y)
        x = parseInt(x)
        y = parseInt(y)
        return 3 * x + y + 2;
    }
    // x#y
    let hashTagCalc = (x, y) => {
        x = parseInt(x)
        y = parseInt(y)
        return 2*x+3*y+4
    }
    let tempStr = marsStr
    while(tempStr.includes('$')) {
        console.log(tempStr)
        // '7$6$5$c'
        let regX = /[\d]+[\$]{1}[\d]+/
        let match = tempStr.match(regX);
        // '7$6'
        console.log(match[0])
        let [x, y] = match[0].split('$')
        let result = dollarCalc(x, y)
        console.log(result)
        tempStr = tempStr.replace(regX, result)
        console.log(tempStr)
    }
    while(tempStr.includes('#')) {
        // '71#64#5#c'
        let regX = /[\d]+[\#]{1}[\d]+/
        console.log(tempStr)
        let match = tempStr.match(regX);
        // '71#64'
        let [x, y] = match[0].split('#')
        let result = hashTagCalc(x, y)
        tempStr = tempStr.replace(regX, result)
    }
    return tempStr
}

console.log('a', getResult('7#6$5#12')) // 226
console.log('b',getResult('7$8$9')) // 104
console.log('c',getResult('7$18$93')) // 218
console.log('d', getResult('7#6$5#12$23#13$253#12#23$35')) // 6930
