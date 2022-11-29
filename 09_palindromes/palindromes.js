const palindromes = function (word) {
    if (word.length == 1 ) {return true;}
    word = word.toLowerCase();
    word = word.replace(/\!|\.|\,|\ /g, "");
    //console.log(word)
    while (word.length >1) {
        if (!word.endsWith(word[0])) {
            return false} else {
                word = word.slice(1,word.length-1)
            }
    }
    return true;    
};


// Do not edit below this line
module.exports = palindromes;
