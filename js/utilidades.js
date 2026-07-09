//=========================================
// MODULO UTILIDADES
//=========================================


//=========================================
// CONVERTIR TEXTOS A MAYÚSCULAS
//=========================================


function convertirMayusculas(){


const campos = [

"rfcContribuyente",

"rfcRepresentanteLegal",

"rfcProveedor",

"rfcRepresentanteLegalProveedor",

"rfcPersonal"

];



campos.forEach(id=>{


const campo =

document.getElementById(id);



if(campo){


campo.value =

campo.value.toUpperCase();


}



});


}





//=========================================
// NUEVO DICTAMEN
//=========================================


function nuevoDictamen(){



const formulario =

document.getElementById(
"formXML"
);



if(formulario){


formulario.reset();


}



const folio =

document.getElementById(
"folio"
);



if(folio){


folio.value="";


}



}





//=========================================
// CAMBIO DE MÓDULOS
//=========================================


function mostrarModulo(id){



const modulos =

document.querySelectorAll(
".modulo"
);



modulos.forEach(modulo=>{


modulo.classList.remove(
"activo"
);


});





const seleccionado =

document.getElementById(id);



if(seleccionado){


seleccionado.classList.add(
"activo"
);


}





const botones =

document.querySelectorAll(
".menu-btn"
);



botones.forEach(btn=>{


btn.classList.remove(
"activo"
);


});





event?.target?.classList.add(
"activo"
);



}





//=========================================
// VALIDACIÓN RFC BÁSICA
//=========================================


function validarRFC(rfc){


const patron =

/^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$/;



return patron.test(rfc);


}





//=========================================
// REGISTRO TEMPORAL DE FOLIO
//=========================================


function registrarFolioTemporal(folio){



localStorage.setItem(

"ultimoFolio",

folio

);



}





//=========================================
// OBTENER ÚLTIMO FOLIO
//=========================================


function obtenerUltimoFolio(){


return localStorage.getItem(
"ultimoFolio"
);


}





//=========================================
// FECHA ACTUAL
//=========================================


function fechaActual(){


const fecha =

new Date();



return fecha
.toISOString()
.substring(0,10);


}





//=========================================
// EVENTOS GENERALES
//=========================================


document.addEventListener(

"input",

function(e){



if(
e.target.tagName==="INPUT"
&&
e.target.type==="text"
){


e.target.value =

e.target.value.toUpperCase();


}



}

);