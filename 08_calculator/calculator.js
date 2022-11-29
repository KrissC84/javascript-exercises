const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	a=Array.from(a);
  if (a.length == 0) {return 0;} else {
    return a.reduce(function(total,value)  {return total + value},0)
  }
};

function multiply(a) { 
  a=Array.from(a);
  if (a.length == 0) {return 0;} else {
    return a.reduce(function(total,value)  {return total * value},1)
  }
}

const power = function(a,b) { return a**b;
	
};

const factorial = function(a) {
	let result = 1;
  if (a==0) {return result} else {
    while (a >= 1) {
      result *= a;
      a--;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
