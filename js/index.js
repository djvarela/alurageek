import {servicios} from "../js/controller.js"



const productosContenedor =document.querySelector(".producto-conteiner");


const nuevoProducto = (nombre, precio)=>{
  const lista = document.createElement("li");
  lista.classList.add("card")
  const template = 
  `<img src="img/stormtrooper.svg" alt="Casco de stormtrooper">
  <h3>Producto ${nombre}</h3>
  <p>${precio}</p>
  <a href="#">Ver producto</a>`
  lista.innerHTML=template

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
 


function search(input,selector){
  document.addEventListener("keyup",(e)=>{
    if(e.target.matches(input)){
      console.log(e.target.value)
      document.querySelectorAll(selector).forEach((el)=>
      el.textContent.toLowerCase().includes(e.target.value)
      ? el.classList.remove("visible")
      :el.classList.add("visible")
      );
    }
  })

}

search(".filter",".card")