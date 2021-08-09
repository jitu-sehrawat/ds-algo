// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

// 1. Naive. Time complexity: O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for(let j = i + 1; j < arr.length; j++) { // O(n)
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  // O(n) * O(n) = O(n^2)
  return undefined;
}

// console.log(sumZero([-3,-2,-1,0,1,2,3]));
// console.log(sumZero([-2,0,1,3]));
// console.log(sumZero([1,2,3]));

// 2. Refactored. Time complexity: O(n)
function sumZeroRefactored(arr) {
  let start = 0;
  let end = arr.length -1;

  while(start < end) {  // O(n)
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    }

    if (sum > 0) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return undefined;
}

console.log(sumZeroRefactored([-3,-2,-1,0,1,2,3]));
console.log(sumZeroRefactored([-2,0,1,3]));
console.log(sumZeroRefactored([1,2,3]));