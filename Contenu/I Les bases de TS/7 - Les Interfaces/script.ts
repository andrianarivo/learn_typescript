interface IRocket {
  reactors: number
  vMax: number
  takeOff: (action: string) => void
}

interface IRocket {
  price: number
  fuelType: string
}

class RocketFactory implements IRocket {
  price: number
  fuelType: string
  reactors: number
  vMax: number

  constructor(price: number, fuelType: string, reactors: number, vMax: number) {
    this.price = price
    this.fuelType = fuelType
    this.reactors = reactors
    this.vMax = vMax
  }

  takeOff(action: string) {
    console.log(action)
  }
}

const Falcon1 = new RocketFactory(1000000, 'kerosene', 1, 1000)
console.log(Falcon1)
Falcon1.takeOff('Go !')

type TRocket = {
  reactors: number
  vMax: number
  takeOff: (action: string) => void
}