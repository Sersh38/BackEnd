export interface productsGlo{
    name: string,
    price: number,
    stock:number
}

export interface cartGlo{
    timestap:string,
    productos:[productsGlo]|[]
}