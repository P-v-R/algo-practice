/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    let ptr = i + 1;
    let current = [s[i]];
    while (ptr < s.length) {
      if (s[i] !== s[ptr] && !current.includes(s[ptr])){
        current.push(s[ptr])
        ptr++;
        if(count < current.length) count = current.length;
        console.log("current ->", current)
      } else {
        if(count < current.length) count = current.length;
        console.log('pt ->', ptr)
        break
      }
    }
  }
  console.log("count ->", count)
};

lengthOfLongestSubstring("ab")





















// function romanize (num) {
//   if (isNaN(num))
//       return NaN;
//   var digits = String(+num).split(""),
//       key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//              "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//              "","I","II","III","IV","V","VI","VII","VIII","IX"],
//       roman = "",
//       i = 3;
//   while (i--)
//       roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//       console.log("---->", roman)
//   return Array(+digits.join("") + 1).join("M") + roman;
// }

// romanize(234)