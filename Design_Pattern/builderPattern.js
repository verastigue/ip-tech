// ARCE, JHON BRIAN V.
// BSIT 2B
// ACTIVITY #2 : DESIGN PATTERN
// ASSIGN TO DO : BUILDER PATTERN OF MAMMAL

class Mammal {
    // INSIDE THE CONSTRUCTOR, THERE ARE ASSIGNMENTS TO OBJECT PROPERTIES OF MAMMAL
    constructor(commonName, scientificName, weight, age, lifespan, sound, ability) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.weight = weight;
        this.age = age;
        this.lifespan = lifespan;
        this.sound = sound;
        this.ability = ability;
    }

    // THESE ARE THE CHAINING OF THE CONSTRUCT WHERE I INVOKING MULTIPLE METHODS ON AN OBJECT IN A SEQUENCE
    withCommonName(commonName) {
        this.commonName = commonName;
        return this;
    }

    withScientificName(scientificName) {
        this.scientificName = scientificName;
        return this;
    }

    withWeight(weight) {
        this.weight = weight;
        return this;
    }

    withAge(age) {
        this.age = age;
        return this;
    }

    withLifespan(lifespan) {
        this.lifespan = lifespan;
        return this;
    }

    withSound(sound) {
        this.sound = sound;
        return this;
    }

    withAbility(ability) {
        this.ability = ability;
        return this;
    }

    // INTRODUCTION OF THE MAMMAL
    intro() {
        console.log(`Hi, I'm a ${this.commonName} or (${this.scientificName}).`);
        console.log(`I weigh ${this.weight} Kg, and I am ${this.age} years old.`);
        console.log(`My lifespan is approximately ${this.lifespan} years.`);
        console.log(`You can hear me making the sound "${this.sound}".`);
        console.log(`One of my abilities is ${this.ability}.`);
    }
}


// CREATING A NEW MAMMAL CALLED LION
const Lion = new Mammal()
    .withCommonName("Lion")
    .withScientificName("Panthera leo")
    .withWeight(190)
    .withAge(5)
    .withLifespan(20)
    .withSound("roar")
    .withAbility("hunting");

// THIS IS THE METHOD 
Lion.intro();


// CONCLUSION: Basically, my understanding of the Builder Pattern is to make the code readable and easy to understand the arguments of the class you are using.
// For example, if you have a class like Mammal(199, 5) with arguments of 199 and 5, you may not know exactly what these numbers are used for. 
// So, we implement the design pattern called the Builder Pattern. Instead of that, we can use something like Mammal().withWeight(199).withAge(5). 
// That's what the Builder Pattern means to me.
