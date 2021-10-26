function balanceParen(string) {
    const stack = [];
    const map = {
        '{':'}',
        '[':']',
        '(':')'
    }

    if (string.length <= 1) {
        console.log('Invalid');
        return 0
    }

    for (let i = 0; i < string.length; i++) {
        let current = string[i];

        if (current === '{' || current === '[' || current === '(') {
            console.log('pushing', current)
            stack.push(current);
        } else if (current === '}' || current === ']' || current === ')') {
            console.log('poppin', current)
            let last = stack.pop()

            if (string[i] !== map[last]) {
                console.log(stack)
                console.log(last)
                console.log(string[i], map[last])
                return 0
            }
        }
    }

    if (stack.length !== 0) {
        console.log('Invalid')
        return 0
    }

    return 1
}

let res = balanceParen('{([])}')
let rest = balanceParen('(()')
let res0 = balanceParen('{)([])}}')
let res1 = balanceParen('{([])}}')
let res2 = balanceParen('{({{[])}')
let res3 = balanceParen('{([()])}')
console.log(res)
console.log(rest)
console.log(res0)
console.log(res1)
console.log(res2)
console.log(res3)

