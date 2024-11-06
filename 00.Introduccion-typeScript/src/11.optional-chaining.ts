interface Family {
    name:string;
    quantityChildren?:string[] 
}

const familyOne:Family = {
    'name': "Familia Moreno", 
    'quantityChildren': ['Laura','Juan','Nicol'],
}

const familyTwo = {
    'name': "Familia Lopez",
}

const countChildren = ({quantityChildren}:Family)=>{
    const count = quantityChildren?.length || 0; 
    return count;
}   

console.log("La cantidad de hijos es "+countChildren(familyTwo));