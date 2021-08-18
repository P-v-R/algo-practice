// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, 
// which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.


/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(heights) {
  let max = 0  

  for (i = 0; i < heights.length; i++) {
      let ptr = i+1;
      
      while (ptr < heights.length) {
        let currAmmt = (Math.min(heights[i], heights[ptr]) * (ptr - i))
        // console.log(currAmmt, "!!!")
        if(currAmmt>max) max = currAmmt
        ptr++
      }
    }
    console.log("------>",max)
    return max;
};


maxArea([1,8,6,2,5,4,8,3,7])