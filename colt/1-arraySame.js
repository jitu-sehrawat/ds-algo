// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding
// value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// A NAIVE SOLUTION: Time Complexity - O(N^2)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){   // O(n)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)   // O(n)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));

// REFACTORED: Time Complexity - O(n)
function sameRefactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }   // O(n)
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }   // O(n)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }   // O(n)

    // O(n) + O(n) + O(n) = 3O(n) = O(n)
    return true
}
console.log(sameRefactored([1,2,3], [4,1,9]));
console.log(sameRefactored([1,2,3], [1,9]));
console.log(sameRefactored([1,2,1], [4,4,1]));
