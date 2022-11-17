const ftoc = function(degree) {
  temp = (1/1.8)*(degree-32);
  return Math.round (temp *10)/10;
};

const ctof = function(degree) {
  temp= degree* 1.8 +32;
  return Math.round( temp*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
