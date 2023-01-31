const contenedorCards = document.getElementById("contenedorCards")
const verCarrito= document.getElementById("verCarrito")
const modalContainer= document.getElementById("modal-container")
const cantidadCarrito =document.getElementById("cantidadCarrito")
const producto = document.getElementById("producto")
const vaciarCarrito = document.getElementById("vaciarCarrito");
const carrito = document.getElementById("carrito");


// Traemos los datos del JSON
const fetchData = async () => {
	fetch("./data.js")
		.then((response) => response.json())
		.then((productos) => {
            pintarCards(productos);
        });
};

// Funcion para pintar los productos
const pintarCards = (productos) => {
    // Creamos un array para guardar los productos del carrito
let carrito =JSON.parse(localStorage.getItem("carrito")) || [];
// Funcion para guardar el carrito en el local storage
const GuardarLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
// Funcion para controlar la cantidad de productos en el carrito
const carritoCounter = () => {
    let cantidad = 0;
    carrito.forEach((producto) => {
        cantidad += producto.cantidad;
    });
    cantidadCarrito.innerText = cantidad;
};
// Funcion para agregar productos al carrito
const agregarCarrito = (e) => {
    if (e.target.classList.contains("btn")) {
        // usamos un framework para mostrar un mensaje de confirmacion
        Toastify({
            text: "El producto se agrego correctamente",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, green, green)",
            },
            onClick: function () {},
        }).showToast();
        // usamos el metodo some para validar si el producto ya existe en el carrito
        const repeat = carrito.some(
            (repeatProducto) => producto.id === producto.id,
        );
        // si el producto existe en el carrito solo aumentamos la cantidad
        if (repeat) {
            carrito.map((productos) => {
                if (productos.id === producto.id) {
                    productos.cantidad++;
                }
            });
        // agregamos el producto al carrito
        } else {
            carrito.push({
                id: producto.id,
                img: producto.img,
                peso: producto.peso,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        // pintamos el carrito
        pintarCarrito();
        // guardamos el carrito en el local storage
        GuardarLocal();
        // controlamos la cantidad de productos en el carrito
        carritoCounter();
    }
};
// Funcion para pintar el carrito
const pintarCarrito = () => {
    // limpiamos el html
    items.innerHTML = "";
    // recorremos el carrito
    carrito.forEach((producto) => {
        // creamos el html
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <img src="${producto.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.peso} $${producto.precio}</p>
        </div>
        `;
            // usamos el metodo filter para ELIMINAR el producto del carrito
            vaciarCarrito = contenedorCards.filter((producto) => producto.id !== producto.id);
             // escuchamos el evento click del boton eliminar
            vaciarCarrito.addEventListener("click", ()=>{
                Toastify({
                    text: "Producto eliminado",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                    background: "grey",
                    },
                    onClick: function(){} 
                }).showToast();
                 vaciarCarrito(producto.id);

            // agregamos el boton al html
            div.append(btn);
            // agregamos el html al contenedor
            items.append(div);
            // pintamos el carrito
            pintarCarrito();
            // guardamos el carrito en el local storage
            GuardarLocal();
            // controlamos la cantidad de productos en el carrito
            carritoCounter();

        });
    });
};
// Funcion para controlar los botones del carrito
const btn = (e) => {
    // aumentar
    if (e.target.classList.contains("btn-success")) {
        // usamos el metodo map para AUMENTAR la cantidad del producto en el carrito
        carrito.map((producto) => {
            if (producto.id === producto.id) {
                producto.cantidad++;
            }
        });
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "green",
            },
            onClick: function(){} 
        }).showToast();
        // pintamos el carrito
        pintarCarrito();
        // guardamos el carrito en el local storage
        GuardarLocal();
        // controlamos la cantidad de productos en el carrito
        carritoCounter();
    }   
    // disminuir
    if (e.target.classList.contains("btn-warning")) {
        // usamos el metodo map para DISMINUIR la cantidad del producto en el carrito
        carrito.map((producto) => {
            if (producto.id === producto.id) {
                producto.cantidad--;
            }
        });
        Toastify({
            text: "Tu producto esta fuera del carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "grey",
            },
            onClick: function(){} 
        }).showToast();
        // pintamos el carrito
        pintarCarrito();
        // guardamos el carrito en el local storage
        GuardarLocal();
        // controlamos la cantidad de productos en el carrito
        carritoCounter();
    }
    

// Esperamos que cargue todo el contenido del DOM y pintamos carrito en caso de que exista informacion

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        pintarCarrito()     
    } 
})

// Creamos los eventos

producto.addEventListener("click", (e) => {
    agregarCarrito(e)
})

items.addEventListener("click", (e) => {
    btn(e)
})

// Funcion para agregar productos al carrito
        // pintamos el carrito en caso de que exista informacion
			productos.forEach((producto) => {
				let content = document.createElement("div");
				content.className = "card";
				content.innerHTML = `
        <img src="${producto.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.peso} $${producto.precio}</p>
        </div>
        
        `;
        // inyectamos el contenido en el contenedor
        contenedorCards.appendChild(content);
        
    //  boton de compra 
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "btn btn-primary";

        content.append(comprar);
    // escuchamos el evento click del boton comprar 
        comprar.addEventListener("click", () => {
        // usamos un framework para mostrar un mensaje de confirmacion            
            Toastify({
                text: "El producto se agrego correctamente",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, green, green)",
                },
                onClick: function () {},
            }).showToast();
            // usamos el metodo some para validar si el producto ya existe en el carrito
            const repeat = carrito.some(
                (repeatProducto) => producto.id === producto.id,
            );
            // si el producto existe en el carrito solo aumentamos la cantidad
            if (repeat) {
                carrito.map((productos) => {
                    if (productos.id === producto.id) {
                        productos.cantidad++;
                    }
                });
            // agregamos el producto al carrito   
            } else {
                carrito.push({
                    id: producto.id,
                    img: producto.img,
                    peso: producto.peso,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                }); 
            }
            // controlamos la cantidad de productos en el carrito
            carritoCounter();
            // guardamos el carrito en el local storage
            GuardarLocal();
            // pintamos el carrito
            pintarCarrito();

        });
    });
};


           // Escuchar la informacion del formulario
           function  formulario() {
            addEventListener("input", function () {

                    if (nombreForm.value === "") {
                    content.innerHTML = ` <p> Ingrese un nombre válido </p> `;
                    }
                });
                
                correoForm.addEventListener("input", function () {
                    if (correoForm.value === "") {
                    content.innerHTML = ` </p> Ingrese un correo electrónico válido </p>` ;
                    }
                });
                
                let formulario = document.querySelector("#form-control");

            }

                //  hacemos un filtro de busqueda para la barra de busqueda 

             filtro = productos.filter (producto.nombre );

             function eliminarProductoLS(productoID){
                let productosLS;
                productosLS = this.obtenerProductosLS();
                productosLS.forEach(productosLS,index => {
                    if (productosLS.id === productoID){
                        productosLS.splice(index,1)
                    }
                    localStorage.setItem('productos', JSON.stringify('productosLS'));
                });
                

            }
          

        } 

        // escuchamos el evento click del boton enviar 
        function sendbutton (){
        getElementById("sendbutton").addEventListener("click", function (e) {
            e.preventDefault();
            if (nombreForm.value === "" || correoForm.value === "") {
                content.innerHTML = ` <p> Ingrese un nombre válido </p> `;
            } else {
                content.innerHTML = ` <p> Gracias por contactarnos </p> `;
            }
        });
    }   

    //  creamos la funcion para guardar los productos en el local storage  
    function GuardarLocal() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
