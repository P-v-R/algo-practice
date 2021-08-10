/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let isNeg = false;
  if (x >= 2**31-1 || x <= (2**31) * -1) {
    return 0
  }
  if(x < 0) {
      isNeg = true;
      x = (x * -1)
  }
  result = `${x}`.split("").reverse().join("")
  if (isNeg) {
    console.log(+`-${result}`)
    return +`-${result}`
  }
  console.log(result)
  return +result
};



reverse(1534236469)