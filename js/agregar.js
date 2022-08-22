const categoria = document.getElementById("categoria");
const descripcion = document.getElementById("descripcion");


console.log(categoria)


const formCarga = document.querySelector("[data-form]");

formCarga.addEventListener("submit", (event)=>{
  event.preventDefault()
  
  const precio = document.getElementById("precio");
  
  console.log(precio)
})