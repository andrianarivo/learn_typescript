"use strict";
class Norway {
    constructor(name, population, lang, capital) {
        this.name = name;
        this.population = population;
        this.lang = lang;
        this.capital = capital;
    }
}
const NorwayData = new Norway('Norway', 5.3, ['norwegian', 'sami'], "Oslo");
console.log(NorwayData);
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const FranceData = new France('France', 67, ['french']);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine('Aquitaine', 3.3, ['french']);
