const fruits = ["Banana", "Orange", "Apple", "Mango"];

// For each = calls a callback on each element. Access val, idx and array as params
fruits.forEach((val, idx, array) => {
    console.log(val, idx, array)
});

fruits.forEach((val, idx) => {
    console.log(`Eat the ${val} at ${parseInt(idx) *10 }`)
})

// Map = creates new array. Performs func on each element
newFruit = fruits.map((val, idx, arr) => {
    return val.toUpperCase()
})
console.log(newFruit)

// Filter - new array from those that pass a test
filterFruit = fruits.filter((val, idx, arr) => {
    if (val.indexOf('B') === 0) {
        return val
    }
})
console.log(filterFruit)