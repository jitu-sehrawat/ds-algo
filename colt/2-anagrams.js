// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false)
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// 1. Time Complexity: O(n)
function validAnagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1obj = {};
  const str2obj = {};

  for (const char of str1) {  // O(n)
    str1obj[char] = (str1obj[char] || 0) + 1;
  }
  for (const char of str2) {  // O(n)
    str2obj[char] = (str2obj[char] || 0) + 1;
  }

  for (const char of str1) {  // O(n)
    if (str1obj[char] !== str2obj[char]) {
      return false;
    }
  }
  // O(n) + O(n) + O(n) = 3O(n) = O(n)
  return true;
}
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));

// 2. Time Complexity: O(n)
function validAnagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1obj = {};

  for (const char of str1) {  // O(n)
    str1obj[char] = (str1obj[char] || 0) + 1;
  }
  for (const char of str2) {  // O(n)
    if (!str1obj[char]) {
      return false;
    } else {
      str1obj[char] -= 1;
    }
  }
  // O(n) + O(n) = 2O(n) = O(n)
  return true;
}