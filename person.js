
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`My name is ${this.name} ane I am ${this.age}`)
    }
}

module.exports = Person