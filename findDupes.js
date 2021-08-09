// use mult pointers to find if n ammount of args contain any duplicates 


function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let unique = {};
  for (let arg of args) {
    if (unique[arg] === 1) return false
    unique[arg] = (unique[arg] || 0) + 1
   
  }
  return true
}
areThereDuplicates(1,2,3,4,5,6,7,8)