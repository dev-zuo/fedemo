
function getContainsArr(strA, strB) {
    let result = {}
    for (let i = 0, len = strB.length; i < len; i++) {
        if (strA.includes(strB[i])) {
            result[strB[i]] = true
        }
    }
   return Object.keys(result).sort((a, b) =>  a.charCodeAt() - b.charCodeAt()).join('')

}

console.log(getContainsArr('bach', 'bbaaccddfg')) // a bc
console.log(getContainsArr('fach', 'bbaaccedfg')) // acf