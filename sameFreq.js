function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  // frquency counters
  let counter1 = {};
  let counter2 = {};
  
  num1 = `${num1}`
  num2 = `${num2}`
 
  if (num1.length !== num2.length) return false;
  
  for (let i = 0; i <= num1.length; i++) {
    console.log(counter1,"--", counter2, i)
    counter1[num1[i]] = (counter1[i] | 0) + 1;
    counter2[num2[i]] = (counter2[i] | 0) + 1;
  }

  for (let num of num1) {
    if (!(num in counter2)){
      console.log("F here")
      return false
      }
  }
  // console.log(counter1, counter2)
  
  for (let num of num2) {
    console.log("--", num)
    if (!(num in counter1)) {
      console.log("F")
      // return false;
    } else if (counter1[num] !== counter2[num]) {
      
      // return false;
    }
  }
  console.log("T")
  return true
}

sameFrequency(182,281)