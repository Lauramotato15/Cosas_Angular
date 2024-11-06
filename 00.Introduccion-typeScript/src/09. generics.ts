export function whatMyType<T>(argument:T):T{
    return argument;
}

const saludo = whatMyType<string>("hola mundo");
console.log("Hola soy un generico "+saludo); 