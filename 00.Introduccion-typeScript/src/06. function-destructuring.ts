export interface Product{
    description:string; 
    price:number;
}

const pc:Product = {
    description: "De alta gama, ideal para estudiar",
    price: 15.0
} 

const ipad:Product = {
    description: "Con alta gama, facil de usar y ligera",
    price: 10.0
}

export interface  TaxCalculationOptions{
    tax:number,
    products: Product[], 
}

const shoppingCart:Product[] = [pc, ipad];
const tax = 0.15; 

export function taxCalculation(options:TaxCalculationOptions):number[]{ //destructurar parametros
    let total = 0; 
    const {tax, products} = options; 

    products.forEach(({price}) => {
        total+=price; 
    })

    return [total, total * tax]; 
}

const [total, totalConImpuestos]= taxCalculation({ //destructuracion esta respuesta
    products : shoppingCart, 
    tax, 
});

console.log("el total ",total);
console.log("Los intereses ",totalConImpuestos); 

export {}; 
