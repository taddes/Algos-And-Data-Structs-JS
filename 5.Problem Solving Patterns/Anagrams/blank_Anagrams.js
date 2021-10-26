/* 
Given two strings, write a function to determine if the second string is
an anagram of the first.  An anagram is a word or phrase formed by rearranging 
the letters of another, such as cinema, formed from iceman
*/

function validAnagram(str1, str2) {

    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    let o1 = {};
    let o2 = {};

    if (s1.length !== s2.length) {
        return false;
    }

    for (char of s1) {
        o1[char] = (o1[char] || 0 ) + 1
    }
    for (char of s2) {
        o2[char] = (o2[char] || 0 ) + 1
    }

    for (char of s1) {
        if (o1[char] !== o2[char]) {
            return false;
        }
    }
    for (char of s2) {
        if (o2[char] !== o1[char]) {
            return false;
        }
    }

    return true

}

console.log(validAnagram('', ''))
console.log(validAnagram('zaa', 'aaz'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('awesome', 'awesom'))



function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = {};

    for (char of str1) {
        map[char] ? map[char] += 1 : map[char] = 1;
    }

    for (char of str2) {
        if (!map[char]) {
            return false;
        } else {
            map[char] -= 1;
        }
    }
    return true;

}
console.log(validAnagram2('', ''))
console.log(validAnagram2('zaa', 'aaz'))
console.log(validAnagram2('rat', 'car'))
console.log(validAnagram2('qwerty', 'qeywrt'))
console.log(validAnagram2('awesome', 'awesom'))
