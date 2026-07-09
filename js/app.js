//=========================================
// APLICACIÓN PRINCIPAL
//=========================================



//=========================================
// INICIO DEL SISTEMA
//=========================================


document.addEventListener(

"DOMContentLoaded",

()=>{



    iniciarSistema();



});







//=========================================
// CONFIGURACIÓN INICIAL
//=========================================


function iniciarSistema(){



    // Mostrar módulo principal

    mostrarModulo("nuevo");



    // Cargar historial existente

    if(
        typeof mostrarHistorial === "function"
    ){

        mostrarHistorial();

    }





    // Colocar fecha actual

    const fecha =

    document.getElementById(
    "fecha"
    );



    if(
        fecha &&
        !fecha.value
    ){


        fecha.value =
        fechaActual();


    }





    // Ocultar ventanas

    const ventanas =

    document.querySelectorAll(
    ".modal"
    );



    ventanas.forEach(
    ventana=>{


        ventana.style.display="none";


    });





    console.log(
    "Generador XML SAT v2.0 iniciado correctamente."
    );



}





//=========================================
// CERRAR MODALES AL HACER CLICK FUERA
//=========================================


window.addEventListener(

"click",

function(event){



    const modales =

    document.querySelectorAll(
    ".modal"
    );



    modales.forEach(
    modal=>{



        if(
            event.target === modal
        ){


            modal.style.display="none";


        }



    });



});





//=========================================
// ATAJO DE TECLADO
// CTRL + G GENERAR FOLIO
//=========================================


document.addEventListener(

"keydown",

function(event){



    if(
        event.ctrlKey &&
        event.key==="g"
    ){



        event.preventDefault();



        generarFolioManual();



    }



});