/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  let letters = [[],[],["a","b","c"],["d","e","f"],["g","h","i"], ["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"], ["w","x","y","z"]]
  
  digits = digits.split("").map(d => + d)
  
};

letterCombinations("23")