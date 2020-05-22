/* 
Given two strings, write a function to determine if the second string is
an anagram of the first.  An anagram is a word or phrase formed by rearranging 
the letters of another, such as cinema, formed from iceman
*/

// Note: may hve forgotten to consider case! Think of case when dealing with strings

function isAnagram(str1, str2) {
  // str1.toLowerCase()
  if(str1.length !== str2.length) {
    console.log('FALSE. NOT EQUIVALENT LENGTH')
    return false
  }

  const str1Array = str1.split('');
  const str2Array = str2.split('');
  // const str1Array = str1.toLowerCase().split('');
  // const str2Array = str2.toLowerCase().split('');

  let letterCount1 = {};
  let letterCount2 = {};

  for (let letter of str1Array) {
    letterCount1[letter] = (letterCount1[letter] || 0) + 1; 
  }
  for (let letter of str2Array) {
    letterCount2[letter] = (letterCount2[letter] || 0) + 1; 
  }
  console.log(letterCount1)
  console.log(letterCount2)

  for (let char in letterCount1) {
    if (letterCount1[char] !== letterCount2[char]) {
      console.log('FALSE')
      return false
    }
  }
  console.log('TRUE')
  return true
}

isAnagram('', '')
isAnagram('zaa', 'aaz')
isAnagram('rat', 'car')
isAnagram('qwerty', 'qeywrt')
isAnagram('awesome', 'awesom')