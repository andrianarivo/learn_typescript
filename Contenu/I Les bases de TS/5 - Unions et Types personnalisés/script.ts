// Unions
let code: string | number | boolean | object | Function
code = 42

let arr: (boolean|number)[] = [true, 1, 2, 3, false]

const foo = (param: number|string): void => {
  console.log(param)
}

foo('Test')

// Types personnalisés
type mixedNumStr = number|string
type booleanOrObject = boolean | object

const baz = (param: mixedNumStr | booleanOrObject): void => {
  console.log(param)
}

type element = {
  x: number,
  y: number,
  id: number | string,
  visible: boolean,
}

const button: element = {
  x: 99,
  y: 50,
  id: 999,
  visible: true
}