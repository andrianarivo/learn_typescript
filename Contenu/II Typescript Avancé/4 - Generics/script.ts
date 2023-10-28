// Generics

// Interface Réutilisable

interface City<T> {
  name: string
  pop: number
  additionalData: T
}

const london: City<object> = {
  name: "London",
  pop: 10,
  additionalData: {area: 1572}
}

const paris: City<object[]> = {
  name: "Paris",
  pop: 5,
  additionalData: [
    {underground: true, lines: 57},
    {restaurant: true, number: 558},
  ]
}

// Generics with functions
const addRepairDate = <T extends object>(obj: T) => {
  const lastRepair = new Date()
  return {...obj, lastRepair}
}

const auto1 = addRepairDate({
  model: "A1",
  km: 70000
})
const auto2 = addRepairDate({
  model: "A1",
  km: 70000,
  color: "white"
})
//const auto3 = addRepairDate("Test") // Error because T extends an object
console.log(auto1.model)
console.log(auto2.color)
