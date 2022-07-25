function Producto(nombre, stock, precio) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}

const productoA = new Producto("barra", 20, 100);
const productoB = new Producto("tabla", 10, 50);

const listaProductos = [productoA, productoB]

let carrito = parseInt(prompt("Ingrese la cantidad de items que desea comprar: "))
while ((isNaN(carrito)) || carrito < 1) {
    carrito = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
}

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

let nombreProducto = []

function nombrarProductos() {
    for(const producto of listaProductos){
        nombreProducto.push(producto.nombre)
    }
}

nombrarProductos()

for(let i = 0; i < carrito; i ++){

let compra = prompt("Ingrese el producto de lo que desea comprar: \n " + nombreProducto.join ("\n ")).toLowerCase()
while (compra == nombreProducto) {
    compra = prompt("Sus unicas opciones de ingreso son: "  + nombreProducto.join ("\n ")).toLowerCase()
}

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