const removeFromArray = function (array, item) {
    const filtered = array.filter((arg)=> arg !== item);
    return filtered;
};

// Do not edit below this line

//alternative solution
/*
  const removeFromArray = function (array, item) {
     for (let i = 0; i < array.length; i++) {
         if(array[i] == item )
         array.splice(i,1); //remove element i, only one element must be removed
     }
    return array;
    };

*/
module.exports = removeFromArray;
