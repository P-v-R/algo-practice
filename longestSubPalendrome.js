/** Given a string s, return the longest palindromic substring in s. */

// check palindrome 
function isPalendrome(str) {
  let len = str.length
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
    return true;
  }
}

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  function isPalendrome(str) {
    let len = str.length
    for (var i = 0; i < len / 2; i++) {
      console.log("from innter func ->",str[i], str[len - 1 - i] )
      if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
        return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
      }
    }
    return true;
  }
  
  let longest = ""

  for (let i = 0; i <= s.length; i++) {
    let ptr = i + 1;
    while (ptr <= s.length) {
      if (s[i] === s[ptr]) {
        let temp = s.slice(i, ptr + 1)
        console.log(">>>", temp, isPalendrome(temp))
        if (isPalendrome(temp) && temp.length > longest.length) {
          longest = temp
        }
      } 
      ptr++;
    }
  }
  if(!longest) longest = s[0]
  console.log("longst ----->", longest)
  return longest
};

longestPalindrome("abcda")