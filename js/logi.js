const login = document.querySelector(".btn-log");



login.addEventListener("click", (event)=>{
  event.preventDefault()
  const user= "diegov";
  const pass= "varela";

  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;


  if(usuario == user) {
    window.location.href= "agregar-producto.html"
  }else{
    alert("erro")
  }


})