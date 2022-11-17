const sumAll = function(start, end) {

    if (typeof(start) != "number" || typeof(end) != "number" || start <0 || end <0 ) {return "ERROR"}

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    //create a variable to hold the sum and initialize it to 0S
    let sum =0;

    //create a loop that is going from start to the end included
    for (let i = start; i <=end; i++) {
        //add each number to the sum
        sum += i;
    }
    
    // return the sum
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
