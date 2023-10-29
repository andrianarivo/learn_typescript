interface Country {
  name: string
  population: number
  lang: string[]
}

class Norway implements Country {
  constructor(
      public name: string,
      public population: number,
      public lang: string[],
      public capital: string
  ) {
  }
}

const NorwayData = new Norway('Norway', 5.3, ['norwegian', 'sami'], "Oslo")
console.log(NorwayData)

class France implements Country {
  constructor(
      public name: string,
      public population: number,
      public lang: string[]
  ) {
  }
}

const FranceData = new France('France', 67, ['french'])
console.log(FranceData)

class Aquitaine extends France {
}

const AquitaineData = new Aquitaine('Aquitaine', 3.3, ['french'])