//Definición de un decorador
function classDecoration<T extends { new (...arg:any[]):{} }>(
    constructor:T
){
    return class extends constructor{
        newProperty = "New property"; 
        hello = "override";
    }
}

@classDecoration
class SuperClass{
    public myProperty:string = "Laura"; 

    public print(){
        return console.log("Hola "+this.myProperty);
    }
}

const classOne = new SuperClass(); 
const metodoInstancia = classOne.print(); 

console.log("Soy la clase "+SuperClass);
console.log("Soy la instancia "+classOne)
console.log("Soy el método de la instancia "+metodoInstancia);


