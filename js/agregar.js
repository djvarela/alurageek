
import { servicios } from "../js/controller.js";

const descripcion = document.getElementById("descripcion");

const formCarga = document.querySelector("[data-form]");

formCarga.addEventListener("submit", (evento)=>{
  evento.preventDefault()
  
  const categoria = document.querySelector("#categoria").value;
  const nombre= document.getElementById("nombre-producto").value;
  const precio = document.getElementById("precio").value;
  const id = nombre + precio;

  console.log("PRECIO " + precio + " nombre " + nombre, "categoria " + categoria, "el id es:" + id)

  servicios.crearProducto(nombre,precio,categoria, id).then(repuesta =>{
    window.location.href = "../index.html"
  })
  .catch(error => console.log(error))

})


