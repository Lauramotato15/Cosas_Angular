
function sum(num1:number, num2:number):number{
    return num1 + num2;
}

function sumString(num1:number, num2:number):string{
    return `${num1 + num2}`
}

function multiply(num1:number,  base:number, num2?:number):number{
 if(num2 != undefined){
    return num1 * num2;
 }else{
    return num1 * base; 
 }   
}
console.log("Suma números enteros: ",sum(10,20));
console.log("Suma números String: ", sumString(30,10));
console.log("Multiplicación dos números: ",multiply(10,10));
console.log("Multiplicación un número: ",multiply(10,10,20));

interface Player {
    name:string; 
    livesnumber:number; 
    show: () => string; 
}

function saveLives (player:Player, mount:number):number{
    return player.livesnumber += mount; 
}

const playerOne:Player = {
    name: "Juan",
    livesnumber: 10, 
    show: function () {
        let mensaje = "Soy jugador uno y tengo "+`${this.livesnumber}`+"vidas"; 
        return mensaje; 
    }
}   
const cantidadVidas = saveLives(playerOne, 50);
console.table(playerOne);
console.log({cantidadVidas});

export {};