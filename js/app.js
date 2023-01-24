const contenedorCards = document.getElementById("contenedorCards")
const verCarrito= document.getElementById("verCarrito")
const modalContainer= document.getElementById("modal-container")
const cantidadCarrito =document.getElementById("cantidadCarrito")
let carrito =JSON.parse(localStorage.getItem("carrito")) || [];
const productos = document.getElementById ('shopContent');
const fetchData = async () => {
	fetch("data.json")
		.then((response) => response.json())
		.then((productos) => {
			console.log(productos);
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
        contenedorCards.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "btn btn-primary";

        content.append(comprar);

        comprar.addEventListener("click", () => {
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
            const repeat = carrito.some(
                (repeatProducto) => producto.id === producto.id,
            );

            if (repeat) {
                carrito.map((productos) => {
                    if (productos.id === producto.id) {
                        productos.cantidad++;
                    }
                });
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
            carritoCounter();
            GuardarLocal();
        });
    });
});
};

fetchData();

    const productosCarrito= ()=>{
    modalContainer.innerHTML="";
    modalContainer.style.display= "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML=`
    <h1 class="modal-header-title"> Carrito </h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerHTML="x";
    modalbutton.className= "modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display="none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((producto)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className="modal-content";
        carritoContent.innerHTML=  `
        <img src="${producto.img}" class="card-img-top" >
        <h5 >${producto.nombre}</h5>
        <p>${producto.peso} $ ${producto.precio}</p>
        <button class="formaBotonRestar"> - </button>
        <p> cantidad: ${producto.cantidad} </p>
        <button class="formaBotonSumar"> + </button>
        <p> total: ${producto.cantidad * producto.precio}</p>
        <button class= "delete-product"> x </button>
        `;
        modalContainer.append(carritoContent);
        let restar= carritoContent.querySelector(".formaBotonRestar");

        restar.addEventListener("click", ()=>{

            producto.cantidad !== 1 && producto.cantidad -- ;

            pintarCarrito();
            GuardarLocal();
        });

        let sumar= carritoContent.querySelector(".formaBotonSumar");
        sumar.addEventListener("click", ()=>{
            producto.cantidad ++ ;
            pintarCarrito();
            GuardarLocal();
        });

        let eliminar = carritoContent.querySelector(".delete-product")
        eliminar.addEventListener("click", ()=>{
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
            eliminarProducto(producto.id);
            
        })
        
    });

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
            


          

        