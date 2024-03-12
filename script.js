class Tree {
    constructor(name,fruit, color, age, height) {
        this.name = name
        this.fruit = fruit
        this.color = color
        this.age = age
        this.height = height
    }

    intro() {
        console.log(`The ${this.age} year old, ${this.height} inch ${this.name} tree bearing a ${this.color} ${this.fruit}` )
    }

    growthPerYear() {
        let average = this.height / this.age
        console.log(`The average growth per year is ${average}`)
    }
}

const Mango = new Tree("mango", "mangoes", "yellow", 12, 168)
const Sampaloc = new Tree("sampalok", "tamarind", "brown", 69, 252)

Mango.intro()
Mango.growthPerYear()