function repeatedString(s: string, n: number): number {
  if (s === "a") return n;
  // Write your code here
  let numAs: number = 0;
  let ptr1: number = 0;
  let totalLoops: number = 0;
  
  while (totalLoops <= n){
    if(ptr1 >= s.length) ptr1 = 0;
    console.log(s[ptr1], ptr1)
      if(s[ptr1] === "a") {
          numAs++;
          totalLoops++
      } else {

        ptr1++;
        totalLoops++
      }
  }
  console.log(numAs)
  return numAs;
}

repeatedString("aba", 10);