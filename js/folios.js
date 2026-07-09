//=========================================
// MODULO DE FOLIOS
//=========================================


// Obtener año seleccionado
function obtenerAñoFolio(){

    const fecha =
    document.getElementById("fecha").value;


    if(!fecha){

        return null;

    }


    return new Date(fecha).getFullYear();

}





// Obtener clave de almacenamiento
function obtenerClaveConsecutivo(año){

    return "consecutivo_" + año;

}





// Obtener consecutivo actual
function obtenerConsecutivo(año){


    const clave =
    obtenerClaveConsecutivo(año);



    let valor =
    localStorage.getItem(clave);



    if(valor === null){

        valor = 1;

        localStorage.setItem(
            clave,
            valor
        );

    }


    return parseInt(valor);


}





// Guardar siguiente consecutivo
function guardarSiguienteConsecutivo(año, numero){


    const clave =
    obtenerClaveConsecutivo(año);



    localStorage.setItem(
        clave,
        numero
    );


}





//=========================================
// GENERAR FOLIO
//=========================================


function generarFolioManual(){


    const rfcProveedor =
    document.getElementById("rfcProveedor")
    .value
    .trim()
    .toUpperCase();



    const fecha =
    document.getElementById("fecha")
    .value;



    if(!rfcProveedor || !fecha){


        alert(
        "Capture RFC proveedor y fecha."
        );


        return;

    }



    const año =
    obtenerAñoFolio();



    let consecutivo =
    obtenerConsecutivo(año);



    let numero =
    consecutivo
    .toString()
    .padStart(5,"0");



    const folio =

    rfcProveedor
    +
    numero
    +
    año;



    document.getElementById("folio")
    .value =
    folio;



    // Guardar siguiente número

    guardarSiguienteConsecutivo(
        año,
        consecutivo + 1
    );



    registrarFolioTemporal(folio);

}





//=========================================
// MODIFICAR CONSECUTIVO
//=========================================


function cambiarConsecutivo(){


    const año =
    obtenerAñoFolio();



    if(!año){


        alert(
        "Seleccione una fecha."
        );


        return;

    }



    const nuevo =

    parseInt(
    document.getElementById(
    "nuevoConsecutivo"
    ).value
    );



    if(
        isNaN(nuevo)
        ||
        nuevo < 1
    ){


        alert(
        "Número de consecutivo inválido."
        );


        return;

    }



    guardarSiguienteConsecutivo(
        año,
        nuevo
    );



    alert(

    "El consecutivo del año "
    +
    año
    +
    " iniciará en "
    +
    nuevo

    );


}