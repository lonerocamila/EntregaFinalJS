const shopContent = document.getElementById("shopContent");


let carrito = [];

fetch("data.json") // Hacemos la petición al archivo data.json
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
        // Guardamos los datos en una variable
       const productos = data;   
        // Llamamos a la función que muestra los productos
        function mostrarProductos() {
        productos.forEach(producto => {
            let content = document.createElement("div");
            // Para crear etiquetas HTML dentro del div que creamos usamos innerHTML
            content.innerHTML = `
               <img src="{$producto.img}>
               <h3>${producto.nombre}</h3>
               p>${producto.descripcion}</p>
               <p>${producto.precio} $ </p>
               <a href="carrito.html" class="btn btn-primary">Agregar al carrito</a>
            
            
            `
            shopContent.appendchild(div);
            shopContent.append(content);


        });
    

    }
    });

