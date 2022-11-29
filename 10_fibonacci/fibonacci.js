const fibonacci = function(number) {
    
    number = Number(number);
    if (number  < 0) {return "OOPS"};
    if (number == 1) {return 1};
    if (number == 0) {return 0};
    
    while (number > 1) {
        number--;
        return fibonacci(number) + fibonacci(number-1);
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
