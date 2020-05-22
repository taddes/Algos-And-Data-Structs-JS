// Alternative solution

/* 
Given two strings, write a function to determine if the second string is
an anagram of the first.  An anagram is a word or phrase formed by rearranging 
the letters of another, such as cinema, formed from iceman
*/


function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero, then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}


validAnagram('', '')
validAnagram('zaa', 'aaz')
validAnagram('rat', 'car')
validAnagram('qwerty', 'qeywrt')
validAnagram('awesome', 'awesom')