function rotLeft(a, d) {
  // Write your code here
  // take the first d elements, and shift them onto the end
  
  
  console.log([...a.splice(d, a.length),...a.splice(0,d)])
}

rotLeft([1,2,3,4,5], 2)  
// ---> [3,4,5,1,2]