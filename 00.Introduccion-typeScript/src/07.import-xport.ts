import { Product, taxCalculation } from './06. function-destructuring';

const tax = 0.15; 

const products:Product[] = [
    {
        description: 'Funcional', 
        price: 17.9
    }, 
    {
        description: 'funcional', 
        price: 12.9
    }
];


const [total, totalConImpuestos] = taxCalculation({
    products, 
    tax
}); 

console.log("Total: "+total);
console.log("total impuesto "+totalConImpuestos);  
