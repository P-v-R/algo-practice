"use strict";

// ([123],[419]); ==> t
// ([121],[441]); ==> f

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  let freqCount = {};
  let sqCount = {};

  for (let num of arr1) {
    freqCount[num] = (freqCount[num] | 0) + 1;
  }
  for (let num of arr2) {
    sqCount[num] = (sqCount[num] | 0) + 1;
  }
  
  for (let num of arr1) {
    if (sqCount[num**2] !== freqCount[num]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  

}

same([1,2,3],[4,1,9]);
same([1,2,1],[4,4,1]);
same([1,2,1],[4,1]);

