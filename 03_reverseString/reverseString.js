const reverseString = function(string) {
let reversedWord='';
let strLen=string.length;
while (strLen) {
    reversedWord += string[strLen-1]
    strLen--;
}
console.log(reversedWord)
return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
