let producto1 = "barra"
let stock1 = 20
let precio1 = 100

let producto2 = "tabla"
let stock2 = 10
let precio2 = 50

let carrito = prompt("Ingrese la cantidad de items que desea comprar: ")
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function carritoCompra(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("el precio es de: $" + precioTotal)
    }
    else{
        alert("no tenemos la cantidad deseada, la cantidad disponible es de " + stock1)
    }
}

for(let i = 0; i < carrito; i ++){

let compra = prompt("Ingrese el producto de lo que desea comprar: \n- barra\n- tabla")
let cantidad = prompt ("ingrese la cantidad que desea comprar")

if (compra == "barra"){
    carritoCompra(cantidad, stock1, precio1)
}
else if (compra == "tabla") {
    carritoCompra(cantidad, stock2, precio2)
}
else{
    alert("no tenemos ese producto")
}
}
alert("Este es precio total de su compra $ " + precioTotal)



