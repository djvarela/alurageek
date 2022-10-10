
import { servicios } from "../js/controller.js";

const descripcion = document.getElementById("descripcion");

const formCarga = document.querySelector("[data-form]");


const validador = ()=>{
  const botonEnviar= document.querySelector(".btn-carga");
  botonEnviar.disabled=true;

  descripcion.addEventListener("blur",(e)=>{
     let valor= e.target.value
 
    if((valor.length >= 5)){ // validar
      console.log("es mayor a 6")
      botonEnviar.disabled=false
    }
    else{
      console.log("es mejor a 5")
    }
  })

}

validador();


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


