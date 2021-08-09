/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) return 0;
 
  let longest = 0;
  // let current = 0;
  let ptr1 = 0;
  
  // while(ptr1 < s.length) {
  //     if(s[ptr1] === s[ptr2])
  // }
  
  for(let i = 0; i < s.length; i++){

      let current = 1;
      let ptr2 = i + 1
      while(ptr2 < s.length) {
           if(s[i] !== s[ptr2]) {
              console.log("--->", ptr2)
              current++;
               ptr2++;
          } else {
              if(current > longest){
                  longest = current;
                  break;
              }
          }
      }
  }
  console.log("-->", longest)
  return longest
};

lengthOfLongestSubstring("abcabcbb")