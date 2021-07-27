console.log(1+3)



const arr1 = [
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,0,2,4,4,0],
  [0,0,0,2,0,0],
  [0,0,1,2,4,0]
]

function hourglassSum(arr) {
  let sums = [];
  for(let x = 0; x < 4; x++) {
      for(let y = 0; y < 4; y++) {
          let sum = 
              arr[x][y] 
              + arr[x][y+1]
              + arr[x][y+2]
              + arr[x+1][y+1]
              + arr[x+2][y] 
              + arr[x+2][y+1] 
              + arr[x+2][y+2] 
          sums.push(sum)
          console.log("==>", sum)
      }
  }
  return Math.max(...sums)
}

hourglassSum(arr1);