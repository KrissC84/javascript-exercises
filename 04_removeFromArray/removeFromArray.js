const removeFromArray = function(..._theArgs) {
    len = arguments.length;
    let list = arguments[0];
    //console.log(len,":",list,arguments[1])

    for (let i = 1; i < len; i++ ) {
        for (let j=0; j < list.length;j++) {
            if ( list[j] === arguments[i]) { 
    
                list.splice(j, 1); 
                //console.log(list)
        }
    }
    
}
return list;
;}
removeFromArray([1,2,3,4],2)


// Do not edit below this line
module.exports = removeFromArray;
