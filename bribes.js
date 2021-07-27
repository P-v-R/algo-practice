function minimumBribes(q) {
  // as long as no n is more than 2 away from its original index 
  let bribes = []
  for(let i in q) {
      if(q[i] - i > 2) {
          console.log("Too Chaotic")
          return;
      } else if (q[i]-1 !== +i) {
        
        bribes.push(q[i])
      }
      
  }
  console.log(bribes.length, bribes)
}

minimumBribes([1,2,3,5,4])