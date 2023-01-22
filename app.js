
const verCarrito  = document.getElementById("verCarrito");
const productoLS = localStorage.getItem("carrito");
producto = document.getElementById("producto");

let carrito = [];

fetch("data.json") // Hacemos la petición al archivo data.json
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
        // Guardamos los datos en una variable
        const productos = data;
        // Llamamos a la función que muestra los productos
        mostrarProductos(productos) // llamar a la función y que reciba productos
    });


function mostrarProductos(productos) { // agregar el parámetro productos.
const mostrarProductos = JSON.stringify(producto);
                            mostrarProductos.forEach((producto) => {
                                let content = document.createElement("div");
                                content.className = "card";
                                content.className = "card";
                                content.innerHTML = `
                                <img src="{$producto.img}">
                                <h3 class="nombre">${producto.nombre}</h3>
                                <p class="descripcion">${producto.descripcion}</p>
                                <p class="precio">${producto.precio} $ </p>
                                <a href="carrito.html" class="btn btn-primary">Agregar al carrito</a>
                        
                        `;
                mostrarProductos.append(content);

                let comprar = document.createElement("button");
                comprar.innerText = "comprar";
                comprar.className="comprar"; 
               
                content.append(comprar);
                comprar.addEventListener("click", () => { 
                    carrito.push({
                       
                    
                        id: producto.id,
                        img: producto.img,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        cantidad: 1,    
                    });

                });
            });

           


    
verCarrito.addEventListener("click", () => {
    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carrito.innerHTML  = `
        <img src="${producto.img}">
        <h3 class="nombre">${producto.nombre}</h3>
        <p class="precio">${producto.precio} $ </p>
        <p class="cantidad">${producto.cantidad}</p>
        `;
        modalContainer.append(carritoContent);
        

});
    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);
    const totalComprado = document.createElement("div");
    totalComprado.className = "total-content"
    totalComprado.innerHTML = ` total: ${total} $`
    modalContainer.append(totalComprado);
});


                        }))
                    }

// FILTRO DE BUSQUEDA
