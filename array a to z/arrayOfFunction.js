const sum = (a,b) => a + b
const sub = (a,b) => a - b
const times = (a, b) => a * b
const div = (a, b) => a / b
const mod = (a, b) => a % b

const func = [sum, sub, times, div, mod]
const a = 5
const b = 6

for(let i = 0; i< func.length; i++) {
    const result = func[i](a,b)
    console.log(`[${func[i].name}] Result = ${result}`)
}