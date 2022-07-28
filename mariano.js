/*class Producto{
    constructor(nombre, stock, precio) {
            this.nombre = nombre.toLowerCase();
            this.stock = stock.parseInt();
            this.precio = precio.parseInt();
    }
    sumaIva(){
       return this.precio = precio.precio * 1.21
    }
}*/

function Producto(nombre, stock, precio) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
}

const productoA = new Producto("barra", 20, 100)
const productoB = new Producto("tabla", 10, 50)

const listaProductos = [productoA, productoB]


let carrito = parseInt(prompt("Ingrese la cantidad de items que desea comprar: "))
    while ((isNaN(carrito)) || carrito < 1) {
        carrito = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
}
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function carritoCompra(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("el precio es de: $" + precioTotal)
    }
    else{
        alert("no tenemos la cantidad deseada, la cantidad disponible es de " + producto.stock)
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
    //aca generas un prompt dinamico    
        while ((compra != productoA.nombre) && (compra != productoB.nombre))  {
            //si tuviera mas productos??? como hago??? tengo que seguir metiendo condiciones a mano en la linea 48???
            //utiliza los metodos que aprendimos para agregar mas objetos al array
            //y volver MAS DINAMICO esta iteracion
            compra = prompt("Sus unicas opciones de ingreso son: \n"  + nombreProducto.join ("\n ")).toLowerCase()
        }
    
    let cantidad = parseInt(prompt("ingrese la cantidad que desea comprar"))
        while ((isNaN(cantidad)) || cantidad < 1) {
        cantidad = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
        }
    
    if (compra == productoA.nombre){
        carritoCompra(cantidad, productoA)
    }
    else if (compra == productoB.nombre) { //y si tuviera 15 productos mas tengo que agregar 15 condiciones mas?
        carritoCompra(cantidad, productoB) //o usar un switch?
    } //LA RESPUESTA ES NO JAJAJAJA 
    else{ //para no repetir codigo MUY SIMILAR aprendimos algo: USALO PORFA!
        alert("no tenemos ese producto")
    }
}
alert("Este es precio total de su compra $ " + precioTotal)