/*
Objects
=======
- Hashing and hash maps principle
- When you don't need order
- When you need fast access/inertion and removal
- No beginning or end of object, just key based access

Insertion - O(1)
Removal - O(1)
Searching - O(n) (liinear: if a given piece of data is within a value of a property)
Access - O(1) (access with a key)

Big O of Object Methods
======================

Object.keys O(n)
Object.values O(n)
Object.entries O(n)
hasOwnProperty O(1) - returns bool

 */

 let pepper = {
   name: 'Pepper',
   isCat: true,
   favoriteThings: ['Anger Bug', 'Cat Dancer', 'Treats']
 }

 console.log(`Object.keys: ${Object.keys(pepper)}`)
 console.log(`Object.values: ${Object.values(pepper)}`)
 console.log(`Object.entries: ${Object.entries(pepper)}`)
 console.log(`hasOwnProperty pepper.hasOwnProperty("name"): ${pepper.hasOwnProperty("name")}`)