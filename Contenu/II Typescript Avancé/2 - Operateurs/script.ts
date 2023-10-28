// L'opérateur !

const container = document.querySelector('.container')!
console.log(container.children)

// L'opérateur ?

type Job = {
  title: string
  description?: string
  salary: number
}

const user1: Job = {
  title: "Dev Front-End",
  //description: "Développeur de sites internet.",
  salary: 30000
}
console.log(user1?.description)

// Optional Parameter
function message(msg?: string) {
  if (msg) {
    console.log(msg)
  } else {
    console.log("No message provided")
  }
}

message('Hello World')

// Optional interface property

interface House {
  room: number
  price: number
  garage?: number
}

const house1: House = {
  room: 4,
  price: 30000
}

// ?? opérateur

const data = false
const display1 = data ?? "Hello World" // triggers on null | undefined
const display2 = data || "Hello World" // triggers on falsy values: 0, '', "", undefined | null,
// false
console.log('display1', display1)
console.log('display2', display2)

// Never
function alertUser(msg: string): never {
  throw msg;
}

alertUser("Alerte, comportement dangereux")
