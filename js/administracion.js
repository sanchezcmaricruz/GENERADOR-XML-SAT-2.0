//=========================================
// MODULO ADMINISTRACION
//=========================================


const CLAVE_ADMIN = "SAT2026";



//=========================================
// ABRIR ADMINISTRACION
//=========================================

function abrirAdministracion(){


document.getElementById(
"ventanaAdmin"
).style.display="flex";



// Mostrar folio actual

document.getElementById(
"folioVistaPrevia"
).value =

document.getElementById(
"folio"
).value;





// Mostrar consecutivo actual


const fecha =

document.getElementById(
"fecha"
).value;



if(fecha){


const año =

new Date(fecha)
.getFullYear();



const consecutivo =

localStorage.getItem(
"consecutivo_"+año
)
||1;



document.getElementById(
"consecutivoActual"
).value =
consecutivo;


}


}





//=========================================
// CERRAR
//=========================================


function cerrarAdministracion(){


document.getElementById(
"ventanaAdmin"
).style.display="none";


}







//=========================================
// VALIDAR PASSWORD
//=========================================


function validarAdministrador(){


const password =

document.getElementById(
"passwordAdmin"
).value;



if(password !== CLAVE_ADMIN){


alert(
"Contraseña incorrecta"
);


return;

}



document.getElementById(
"panelAdmin"
).style.display="block";



alert(
"Acceso autorizado"
);



}







//=========================================
// EVENTOS
//=========================================


document.addEventListener(
"DOMContentLoaded",
function(){



// EDITAR FOLIO


const editarFolio =

document.getElementById(
"habilitarEdicionFolio"
);



if(editarFolio){



editarFolio.addEventListener(
"change",
function(){


document.getElementById(
"folioVistaPrevia"
).disabled =
!this.checked;



});


}





// EDITAR CONSECUTIVO


const editarConsecutivo =

document.getElementById(
"editarConsecutivo"
);



if(editarConsecutivo){



editarConsecutivo.addEventListener(
"change",
function(){


document.getElementById(
"consecutivoActual"
).disabled =
!this.checked;



});


}



});







//=========================================
// APLICAR FOLIO
//=========================================


function aplicarFolioManual(){



const folio =

document.getElementById(
"folioVistaPrevia"
).value.trim();



if(!folio){


alert(
"Capture un folio"
);


return;

}




document.getElementById(
"folio"
).value =
folio;



alert(
"Folio actualizado"
);



}








//=========================================
// GUARDAR CONSECUTIVO
//=========================================


function guardarConsecutivo(){


const fecha =

document.getElementById(
"fecha"
).value;



if(!fecha){


alert(
"Seleccione fecha"
);


return;


}



const año =

new Date(fecha)
.getFullYear();



const consecutivo =

parseInt(

document.getElementById(
"consecutivoActual"
).value

);



if(
isNaN(consecutivo)
||
consecutivo<1
){


alert(
"Consecutivo inválido"
);


return;

}



localStorage.setItem(

"consecutivo_"+año,

consecutivo

);



alert(
"Consecutivo guardado"
);



}







//=========================================
// ACEPTAR CAMBIOS
//=========================================


function aceptarCambios(){


cerrarAdministracion();



}