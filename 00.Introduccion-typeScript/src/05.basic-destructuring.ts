//Destructuración de objetos
interface Detail{
    author:string; 
    year:number; 
}
interface AudioPlayer{
    audioVolumen:number; 
    songDuration:number; 
    song:string;
    details:Detail;
}

const playerOne:AudioPlayer = {
    audioVolumen:90, 
    songDuration:36,
    song:"Mess", 
    details:{
        author:"Laura", 
        year:2024
    }
}
console.log("Destructuración de objetos");
console.log("<------------------------------------------------------>"); 
const {details,details:{author}} = playerOne; 
const {details:detalle} = playerOne;
const {author:autor} = detalle;
console.log("Soy detalle renombrado",detalle); 
console.log("Soy detalle por defecto",details);
console.log("Soy la autora", author);
console.log("Soy autor destructurado en 2 y renombrado",autor);
console.log("<------------------------------------------------------>"); 

//Destructuración de arreglos 
const arrayPerros: string[] = ["Pepe", "Snow", "Alaska"];

const [,perroSNow] = arrayPerros; 

console.log("Destructuración de arreglos");
console.log("<------------------------------------------------------>"); 
console.log(perroSNow); 

export {}