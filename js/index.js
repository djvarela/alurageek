import {servicios} from "../js/controller.js"

console.log(servicios)

const productosContenedor =document.querySelector(".producto-conteiner");


const nuevoProducto = (nombre, precio)=>{
  const lista = document.createElement("li");
  const template = 
  `<img src="img/stormtrooper.svg" alt="Casco de stormtrooper">
  <h3>Producto ${nombre}</h3>
  <p>${precio}</p>
  <a href="#">Ver producto</a>`
  lista.innerHTML=template
  console.log(lista)
  return lista; 
}



 servicios.listaProductos()
    .then((data)=>{
      data.forEach((producto)=>{
        const agregarNuevoProducto= nuevoProducto(producto.nombre, producto.precio)
        productosContenedor.appendChild(agregarNuevoProducto)
    })
  })
    .catch((error) =>alert("ocurruio un error"));
 