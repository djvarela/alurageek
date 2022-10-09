
const listaProductos = ()=> fetch("https://djvarela.github.io/alurageek/db.json").then((respuesta) => respuesta.json())


const crearProducto = (nombre, precio, categoria, id) =>{
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, precio,categoria, id}),
    })
}




export const servicios ={
    listaProductos,
    crearProducto,
}
