class Person{
    public name:string; 
    public lastName:string; 

    constructor(name:string, lastName:string){
        this.name = name;  
        this.lastName = lastName;  
    }
}
const personOne = new Person("Laura", "Motato");
console.log(personOne);

class Hero extends Person{
    constructor(public alterEgo:string, public age:number, name:string, lastName:string){
        super(name, lastName);
    }
}

class Heras {
    constructor(public person:Person, public address:string = 'Pereira'){

    }
}

const newHero = new Hero("Muchas vidas",12, "Laura", "Motato");
const newPerson = new Person("Emanuel", "Lopez");

const newHeras = new Heras(newPerson,'Bogotá');

console.log("Heroe extendiendo de persona ", newHero);
console.log("Heroe que tiene una propiedad Persona ",newHeras);