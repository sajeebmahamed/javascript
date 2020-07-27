const Stack = require('./stackImplement1')
const stack = new Stack()
const text = 'Sajeeb'

for(let i=0; i<text.length; i++) {
    stack.push(text.charAt(i))
}
let reversedText = '';
while(!stack.isEmpty()) {
    // console.log('[POPED]')
    // console.log(stack)
    reversedText += stack.pop()
}
// console.log(reversedText)
// console.log(stack)

//js array stack method

const name = 'SAJEEB'
const jsStack = []
for(let i=0; i<name.length; i++) {
    jsStack.push(name.charAt(i))
}
// console.log(jsStack)
let res = ''
while(jsStack.length) res += jsStack.pop()

console.log(res)