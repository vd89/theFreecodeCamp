/*
Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/



function binaryAgent(str) {
    return String.fromCharCode(...str.split(' ').map(char=> {
        return parseInt(char,2)
    })
    )
}

var newBin = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(newBin);

// var num = 1518547512014532

// var bin = num.toString(2)
// console.log(bin);

const bin = (n) => {
    return n.toString(2)
}
console.log(bin(185));