const url = "./data.json";

fetch(url)  
.then (res=> res.json())
.then (data => mostrarProductos(data))

const contenedorProductos = document.querySelector('#container')

function mostrarProductos (productos){
    // console.log (productos)

    productos.forEach( prod => {
        let card = document.createElement('div');

        card.innerHTML = ` <h2>${prod.nombre}</h2>
                            <h5>${prod.marca}</h5>
                            <p>${prod.detalles}</p> 
                            <p>$${prod.precio}</p>
                         <img src="${prod.imagen}">

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