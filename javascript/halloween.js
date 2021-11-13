/******Aqui estan las funciones de halloween ******/
/****** funcion mostrar ******/
/****** una funcion es un modulo que ejecuta una sola tarea mostrar 
 *  --> muestra, ocultar--->oculta 
 *  JavaScript toma como objeto principal document, que es la pagina html actual
 *  tiene una serie de operadores, llamados getters, que seleccionan elementos para su manipulacion.
 *  Un elemento,selecionado con un getter, puede ser modifcado: contenido, estilo,los atributos...******/
function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible";
}
/****** funcion ocultar ******/
function ocultar(imagen){
    document.getElementById(imagen).style.visibility="hidden";
}
/****** funcion sonar ******/
function sonar(sonido){
    document.getElementById(sonido).play();
}

function parar(sonido){
    document.getElementById(sonido).pause();
}

