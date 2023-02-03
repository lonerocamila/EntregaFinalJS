const url = "./data.json";

fetch(url)  
.then (res=> res.json())
.then (data => mostrarProductos(data))

const contenedorProductos = document.querySelector('#container')

function mostrarProductos (productos){
    // console.log (productos)

    productos.forEach( prod => {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = ` <h2 class="nombre">${prod.nombre}</h2>
                            <h5 class="marca">${prod.marca}</h5>
                            <p class="descripcion">${prod.detalles}</p> 
                            <p class="precio">$${prod.precio}</p>
                           <img class="img" src="${prod.imagen}">

                         <button class="btn-comprar bg-success" id="${prod.id}"> Comprar </button>


        `
        contenedorProductos.appendChild(card)
    });
    // por fuera del foreach capturo el button
    const buttonComprar = document.querySelectorAll (".btn-comprar");
    buttonComprar.forEach(btn => {
        btn.addEventListener ('click', (e)=> agregarCarrito(e, productos))

        
    });

}

function agregarCarrito(e,prods){
    console.log (prods);
    console.log (e.target.id)

    const finder = prods.filter  (el=> el.id === parseInt(e.target.id))
    console.log (finder)
}

//carrito
const carrito = [];

function agregarAlCarrito (producto){
    carrito.push(producto)
}

//mostrar carrito
function mostrarCarrito (){
    console.log (carrito)
}

//eliminar del carrito
function eliminarDelCarrito (id){
    carrito = carrito.filter (el => el.id !== id)
}

//vaciar carrito
function vaciarCarrito (){
    carrito = []
}

//calcular total
function calcularTotal (){
    let total = 0;
    carrito.forEach (el => total += el.precio)
    return total
}

//calcular cantidad
function calcularCantidad (){
    let cantidad = 0;
    carrito.forEach (el => cantidad += el.cantidad)
    return cantidad
}

//calcular subtotal
function calcularSubtotal (){
    let subtotal = 0;
    carrito.forEach (el => subtotal += el.precio * el.cantidad)
    return subtotal
}

//calcular iva
function calcularIva (){    
    return calcularSubtotal() * 0.21
}




