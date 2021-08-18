/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let isNeg = false;
  
  if(x < 0) {
    isNeg = true;
    x = (x * -1)
  }
  result = `${x}`.split("").reverse().join("")
  if (isNeg) {
    console.log(+`-${result}`)
    result = `-${result}`
  }
  // console.log("------>>>>", +result, +result < (Math.pow(2, 31) * -1) )
  if (+result < (Math.pow(2, 31) * -1) || +result > Math.pow(2, 31) - 1) return 0;
  return +result
};


reverse(-2147483648)