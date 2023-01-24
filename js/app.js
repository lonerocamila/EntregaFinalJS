
const verCarrito  = document.getElementById("verCarrito");
const productoLS = localStorage.getItem("carrito");
const producto = document.getElementById("producto");
const filtro = document.getElementById("barraBusqueda");
const pintarCarrito = () => {

let carrito = [];

fetch("data.json") // Hacemos la petición al archivo data.json
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
        // Guardamos los datos en una variable
        const productos = data;
        // Llamamos a la función que muestra los productos
        mostrarProductos(productos) // llamar a la función y que reciba productos
    });

    const cards = document.querySelectorAll(".shopContent");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
      });
    });

// mostramos los productos en la pagina principal

function mostrarProductos(productos) { // agregar el parámetro productos.
    productos.forEach(producto => { 
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
                 
          
                mostrarProductos.appendChild(content);
                if (producto === carrito.id ){
                    Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'El producto fue agregado!',
                        timer: 1000,
                        showConfirmButton: false,
                      });
            

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
           
                
//  Agregamos los productos al carrito                           
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
                let eliminar = document.createElement("span");

                eliminar.innnerText="❌";
                eliminar.className = "eliminarProducto";
                carritoContent.append("eliminar");
                });
            

                function limpiarHTML() {
                    carrito.innerHTML = "";
                  }
                  
                  carrito.addEventListener("click", eliminarProducto);

            function eliminarProducto (e){
                if (e.target.classList.contains("btn-eliminarProducto")){
                    let productoID = e.target.getAtribute("id");
                    productoLS = carrito.filter(
                        (producto) = (producto.id !== productoID)
                    );
                    carritoHTML();
                }
            }
                  

            // Escuchar la informacion del formulario
            formulario.addEventListener("input", function () {

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

             let.filtro = equipo.filter (producto.nombre );

             function eliminarProductoLS(productoID){
                let productosLS;
                productosLS = this.obtenerProductosLS();
                productosLS.forEach(productosLS,index => {
                    if (productosLS.id === productoID){
                        productosLS.splice(index,1)
                    }
                    localStorage.setItem('productos', JSON.stringify('productosLS'));
                });
                
            function leerLS(){
                let productosLS;
                productosLS = this.obtenerProductosLS();
                productosLS.forEach(producto => {
                    const row = document.createElement ('tr');
                    row.innerHTML = `
                    <td>
                    <img src="${producto.imagen}" width: 100>
                    </td>
                    <td>
                    ${producto.titulo}
                    ${producto.precio}
                    </td>
                    <td>
                    <a href="#" class= "borrar-producto fas fa-times-circule" data-id= ${productO.id} ></a>
                    </td>
                    `;
                    
                });
                listaProductos.appendChild (row);
               
            }
        }

    })}
}

function vaciarLS(){
    localStorage.clear();
    }
    function procesarPedido(e){
        e.preventDefault();
        if (this.obtenerProductosLS().length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito esta vacio, agrega tus productos',
                timer: 2000,
                showConfirmButton: false,

        },
        location.href= "carrito.html",
            )}
        }

        function calcularTotal(){
            let productoLS;
            let total = 0 , subtotal = 0, iva = 0 ;
            productoLS = this.obtenerProductosLS();
        }


        // darle funcionalidad al boton de enviar en carrrito
        enviarBtn.addEventListener('click',)
