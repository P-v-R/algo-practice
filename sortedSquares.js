/**
 * 
 * 
The problem:

Suppose there is an ordered list of integers. Please implement a method to:

1. Square each element.

2. Generate a new ordered list.


Requirements:

1. Implement the fastest solution you can think of. 

2. Create test cases using TDD. 

3. Use any languages you are comfortable at(Ruby/JavaScript are preferred). 

4. Do not use the built-in sort methods of the language. The key is how to implement a fast sort method for this scenario. 

 * 
 */

function squareSort(nums) {

  if (nums[0] > 0) {
    let result = nums.map(num => num ** 2);
    // console.log("result", result)
    return result;
  }

  let pos = [];
  let negs = [];


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negs.unshift(nums[i] ** 2);
    } else {
      pos.push(nums[i] ** 2);
    }
  }
  mergeAndSort(negs, pos);
}


function mergeAndSort(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {
    let unmerged1 = arr1[index1];
    let unmerged2 = arr2[index2];

    // if next comes from arr1
    if (unmerged1 <= unmerged2) {
      merged[current] = unmerged1;
      index1++;

      // if next comes from arr2
    } else {
      merged[current] = unmerged2;
      index2++;
    }

    current++;
  }
  console.log(merged)
  return merged;
}
squareSort([-3, -2, 0,1, 1, 2, 3, 4, 5])