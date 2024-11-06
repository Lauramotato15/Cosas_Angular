
interface Canino{
    name:string, 
    color:string, 
    owner:string,
    age:number,
    comer():string,
}

class Lobo implements Canino{
    name: string;
    color: string;
    owner: string;
    age: number;

    constructor(name:string,color:string,age:number,owner:string){
        this.name = name, 
        this.color = color; 
        this.age = age; 
        this.owner = owner;
    }
    comer(): string {
        let saludo: string = "Hola soy lobo, estoy comiendo";
        return saludo;
    }
}

let newDog = new Lobo("Snow","Blanco",1,"Luis"); 

console.log({newDog}, newDog.comer()); 
export {}; 