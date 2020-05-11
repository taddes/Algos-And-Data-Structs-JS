/*
Arrays
======
- Intrinsic order to data
- Comes at speed/memory cost
- Each item has a value, but also a numeric index

Benefits
--------
- When you need order
- When you need fast access/insertion and removal

Searching O(n)
Access O(1)
Insertion **
Removal **

Access
------
When accessing an array index, and the array can go that far, you can immediately access
the data with no penalty (constant time)

Search
------
When searching, without index, the length of the array has an impact on speed


*/

let names = ['Sarah', 'Taddes', 'Pepper'];

// Adding/Removing to/from end of array is constant time O(1)
names.push('Pamina')
names.pop()

// When adding to a specific index, the array has to be re-indexed.  Increases in size based on
// sice of array O(n)
names.shift()

// Removing from beginning results in needing to re-index
names.unshift()

/* 
Methods
=======

push O(1)
pop O(1)
shift O(n)
unshift O(n)
concat O(n) - merge multiple arrays, simplifies to O(n) proportionate to size of both arrays.
slice O(n) - returns copy of part of array, 10 vs 1000. Size matters
splice O(n) - remove and add new elements (versatile)
sort O(n * log n)
forEach/map/filter/reduce O(n)
*/

