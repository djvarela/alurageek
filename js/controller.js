
const listaProductos = ()=> fetch("http://djvarela.github.io/alurageek/db.json").then((respuesta) => respuesta.json())


export const servicios ={
    listaProductos,
}
