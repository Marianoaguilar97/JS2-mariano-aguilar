let producto1 = "barra"
let stock1 = 20
let precio1 = 100

let producto2 = "tabla"
let stock2 = 10
let precio2 = 50

let carrito = prompt("Ingrese la cantidad de items que desea comprar: ") //utilizar parseInt
//que sucede si el usuario ingresa una letra? o un numero negativo???
//armar el condicional correspondiente
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
//si el usuario ingresa cualquier cosa en lugar de barra o tabla me pregunta la cantidad y eso está mal
//let cantidad = prompt ("ingrese la cantidad que desea comprar")

if (compra == "barra"){ //utilizar los metodos correctos de comparación (toLowerCase por ejemplo)
    let cantidad = prompt ("ingrese la cantidad que desea comprar")
    carritoCompra(cantidad, stock1, precio1)
}
else if (compra == "tabla") { //utilizar los metodos correctos de comparación (toLowerCase por ejemplo)
    let cantidad = prompt ("ingrese la cantidad que desea comprar")
    carritoCompra(cantidad, stock2, precio2)
}
else{
    alert("no tenemos ese producto")
}
}
alert("Este es precio total de su compra $ " + precioTotal)