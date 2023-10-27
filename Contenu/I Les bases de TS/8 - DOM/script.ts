// Type Assertion
let txt: string
txt = "str"

const form: HTMLFormElement = document.querySelector('form')!
console.log(form.children)

// Type Casting
const form2 = document.querySelector('form') as HTMLFormElement
const form1 = document.querySelector('.form-container') as HTMLFormElement
console.log(form2.children)
const input = document.querySelector('input') as HTMLInputElement

function handleSubmit(e: Event) {
  e.preventDefault()
  console.log(input.value)
}

form.addEventListener('submit', handleSubmit)

window.addEventListener('click', handleClick)

function handleClick(e: MouseEvent) {
  console.log(e.clientX, e.clientY)
}

const paragraphList = document.querySelectorAll('p')
paragraphList.forEach((p) => {
  console.log(p.textContent)
})