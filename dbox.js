// // function goodTuples(a) {
// //   let goodTupleCount = 0
// //   // if a contains less than one tuple - return
// //   if (a.length < 3) return;
  
// //   for(let i = 0; i < a.length - 3 ; i++){
// //       let currTuple = [a[i], a[i+1], a[i+2]]
// //       if (
// //           (a[i] === a[i+1] && a[i] !== a[i+2]) || 
// //           (a[i] === a[i+2] && a[i] !== a[i+1]) || 
// //           (a[i+1] === a[i+2] && a[i] !== a[i+1])){
// //               goodTupleCount++
// //           }
// //   }
// //   console.log(goodTupleCount)

// // }


// // goodTuples([1,2,1,1,5,6,7,8])

// // function threeDivSubsequences(number) {
    
// //   let len = number.length;
// //   let isDivisableCount = 0
  
// //   let leftPtr = 0;
// //   let rightPtr = 0;
  
// //   while (leftPtr < len - 1){
// //       let tempNum;
      
// //       // if right ptr at end of string reset pointers
// //       if(rightPtr > len-1){
// //           leftPtr += 1;
// //           rightPtr = leftPtr;
// //       }
// //       // if pointers are at same idx, check if divisable and continue
// //       if(leftPtr === rightPtr && isDivisable(number[leftPtr])) {
// //          console.log("---->", number[leftPtr])
// //           isDivisableCount++
// //           rightPtr++
// //       }
// //       // assign new number to temp num and check divisability
// //       tempNum = number.substring(leftPtr,rightPtr)
      
// //       if(isDivisable(tempNum) && leftPtr !== rightPtr ) {
// //         console.log("--->", tempNum, leftPtr, rightPtr  )
// //           isDivisableCount++;
// //           rightPtr++
// //       } else {
// //           rightPtr++
// //       }
      
// //   }
// //   console.log(isDivisableCount)
// // }

// // helper function to check if number is divisable by 3
// function isDivisable(num){
//   return +num % 3 === 0;
// }

// function threeDivSubsequences(number) {
    
//     let len = number.length;
//     let isDivisableCount = 0
    
//     let leftPtr = 0;
//     let rightPtr = 0;
    
//     if(isDivisable(number)) isDivisableCount++
//     while (leftPtr < len - 1){
        
//         // assign new number to temp num and check divisability
//         let tempNum = number.substring(leftPtr,rightPtr)
        
//         if(rightPtr >= len-1){
//             leftPtr += 1;
//             rightPtr = leftPtr;
//         }
//         // if pointers are at same idx, check if divisable and continue
//         if(leftPtr === rightPtr && isDivisable(number[leftPtr]) ) {
//             isDivisableCount++
//             rightPtr++
//         } else if(isDivisable(tempNum) 
//                     && leftPtr !== rightPtr 
//                     && number[leftPtr] !== "0") {
//             isDivisableCount++;
//             rightPtr++
//         } else {
//             rightPtr++
//         }
        
//     }
//     return isDivisableCount;
// }

// // helper function to check if number is divisable by 3
// function isDivisable(num){
//     return +num % 3 === 0;
// }

// threeDivSubsequences("492")

function threeDivSubsequences(number) {
    
  let len = number.length;
  let isDivisableCount = 0
  
  let leftPtr = 0;
  let rightPtr = 0;
  
  if(isDivisable(number)) isDivisableCount += 1;
  
  while (leftPtr < len - 1){
      console.log(leftPtr, rightPtr)
      // assign new number to temp num and check divisability
      let tempNum = number.substring(leftPtr,rightPtr)
      
      if(rightPtr >= len-1){
          leftPtr += 1;
          rightPtr = leftPtr;
      }
      // if pointers are at same idx, check if divisable and continue
      if(leftPtr === rightPtr && isDivisable(number[leftPtr]) ) {
          isDivisableCount++
          rightPtr++
        // if tempnum divisable by 3 and pointers are not the same 
      } 
      if(isDivisable(tempNum) 
                  && leftPtr !== rightPtr) {
                      console.log("-->", tempNum)
          isDivisableCount++;
          rightPtr++
      } 
      rightPtr++
      
  }
  console.log(isDivisableCount)
  return isDivisableCount;
}

// helper function to check if number is divisable by 3
function isDivisable(num){
  
  return +num % 3 === 0;
}

threeDivSubsequences("492")