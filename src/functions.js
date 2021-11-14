function addToCart(productName,quantity) 
{
    console.log(quantity+" Adet "+productName+" Sepete Eklendi")
}

//addToCart("Elma")
addToCart("Yumurta",10)
//addToCart("armut")

let sayHello =()=>
{
    console.log("hello world")
}
sayHello()

let product1=
{
    productName:"Elma",
    quantity:40,
    unitPrice:12
}
function addToCart2(product) 
{
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity) 
    console.log("Fiyat: "+product.unitPrice)     
}

addToCart2(product1)


function addToCart4(x) 
{
    console.log(x)    
}

let products=
[
    {productName:"Elma",quantity:"20",unitPrice:14},
    {productName:"Armut",quantity:"20",unitPrice:14},
    {productName:"Nar",quantity:"20",unitPrice:14}
]

addToCart4(products)

function add(birsey,...numbers) //rest
{
    let total=0
    for (let i = 0; i < numbers.length; i++) 
    {
        total+=numbers[i]
    }   

    console.log(total)
    console.log(birsey)
}

add(20,30)
//add(20,30,40)
//add(20,20,20,20,20)

let numbers = [10,20,30,600]
console.log(Math.max(...numbers))

//destruction
let [icAnadolu,marmara,[akdenizdekiSehirler]]=[
    {name:"İç Anadolu" , populatoion:"10M"},
    {name:"İç Anadolu" , populatoion:"10M"},
    [
        ["Adana","Mersin"],
        ["Balıkesir","Çanakkale"]
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadolu.name)
console.log(marmara.populatoion)
console.log(akdenizdekiSehirler)

let newProductName,newUnitPrice,newQuantity
({
    productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity
}
= {productName:"Elma",unitPrice:2,quantity:200})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)