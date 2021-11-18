let cart = 
[
    {id:1,productName:"Computer",quantity:23,unitPrice:12000},
    {id:2,productName:"Phone",quantity:43,unitPrice:5000},
    {id:3,productName:"Book",quantity:142,unitPrice:45},
    {id:4,productName:"Car",quantity:7,unitPrice:150000},
    {id:5,productName:"Cycle",quantity:6,unitPrice:11000}
]



cart.map(product=>
{
    console.log(product.productName+":"+product.unitPrice*product.quantity)
})

let quantityOver2=cart.filter(product=>product.quantity>20)
console.log(quantityOver2)

let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)

function addToCart(sepet) 
{
   sepet.push({id:6,productName:"Pencil",quantity:156,unitPrice:20})
}
addToCart(cart)
console.log(cart)