function charCount(str) {
    let count = {};
    let collection = str.toUpperCase().split(' ').join('')
    console.log(collection)

    for (let char of collection) {
        if (!count[char]) {
            count[char] = 1
        } else {
            count[char]++
        }
    }
    console.log(count)
}

charCount('To Be Or Not To Be')

function altChar(str) {
    let obj = {};
    for (let char of str) {
        if (char.match(/^[0-9a-zA-Z/]+$/)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    console.log(obj)
}
altChar('To Be Or Not To Be')