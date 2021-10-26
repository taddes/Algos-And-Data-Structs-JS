function balanced(bracketStr) {
    console.log(bracketStr)
    const stack = [];
    const map = {
        '{':'}',
        '(':')',
        '[':']'
    }

    if (bracketStr.length <= 1) {
        console.log('Invalid');
        return 0;
    } 

    for (let i = 0; i < bracketStr.length; i++) {
        if (bracketStr[i] === '{' || bracketStr[i] === '[' || bracketStr[i] === '(') {
            stack.push(bracketStr[i]);
        } else if (bracketStr[i] === '}' || bracketStr[i] === ']' || bracketStr[i] === ')') {
            let top = stack.pop();

            if (bracketStr[i] !== map[top]) {
                console.log('Invalid');
                return 0;
            }
        }
    }
    if (stack.length !== 0) {
        console.log('Invalid');
        return 0;
    }

    console.log('Valid')
    return 1;
}

console.log(balanced('({})'));
console.log(balanced('({{}})'));
console.log(balanced('({[]})'));
console.log(balanced('({[][]})'));
console.log(balanced('({]})'));
console.log(balanced('({[]]})'));
console.log(balanced('('));
console.log(balanced('((((('));
console.log(balanced('))}}))'));
