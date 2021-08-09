function averagePair(nums, avg){
  let ptr1=0;
  let ptr2=1;
  while (ptr1 > nums.length) {
    if(ptr2 >= nums.length){
      ptr1++;
      ptr2 = ptr1 + 1
    } else if((nums[ptr1] + nums[ptr2]) / 2 === avg) {
      return true;
    } 
    ptr2++
  }
  return false

}

averagePair([1,2,3],2.5) // --> true