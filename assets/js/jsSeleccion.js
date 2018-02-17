let selection = 

objeto_datos = new Object();
objeto_datos.titulo = titulo;

let objeto_serializado = JSON.stringify(objeto_datos)


window.localStorage.setItem('objdatos', objeto_serializado);