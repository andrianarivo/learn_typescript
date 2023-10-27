function multiply(num1: number, num2 = 10, action?: string) {
  if(action) {
    console.log(action)
  }
  return num1 * num2
}

console.log(multiply(10, 2))

let foo: Function
foo = () => {}

// Function signature
let baz: (a: number, b: number) => number

baz = (a, b) => a+b

// Callback
function greetings(fn: (a: string) => void) {
  fn('Hello')
}

function printToConsole(msg: string) {
  console.log(msg)
}

greetings(printToConsole)