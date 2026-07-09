//=========================================
// MODULO HISTORIAL
//=========================================


// Obtener historial guardado

function obtenerHistorial(){

    let historial =
    localStorage.getItem("historialXML");


    if(!historial){

        return [];

    }


    return JSON.parse(historial);

}





// Guardar historial

function guardarHistorial(datos){


    let historial =
    obtenerHistorial();



    let registro = {


        fecha:
        datos.fechaEmisionDictamen,


        folio:
        datos.numeroFolioDictamen,


        rfcProveedor:
        datos.rfcProveedorDictamen,


        rfcContribuyente:
        datos.rfcContribuyente,


        producto:
        datos.Producto,


        hora:
        new Date()
        .toLocaleString()


    };



    historial.unshift(registro);



    localStorage.setItem(

        "historialXML",

        JSON.stringify(historial)

    );



}





//=========================================
// MOSTRAR HISTORIAL
//=========================================


function mostrarHistorial(){


    const tabla =
    document.getElementById(
    "tablaHistorial"
    );



    if(!tabla){

        return;

    }



    tabla.innerHTML="";



    let historial =
    obtenerHistorial();



    historial.forEach(
    registro=>{


        let fila =
        document.createElement(
        "tr"
        );



        fila.innerHTML = `

        <td>
        ${registro.fecha}
        </td>


        <td>
        ${registro.folio}
        </td>


        <td>
        ${registro.rfcProveedor}
        </td>


        <td>
        ${registro.producto}
        </td>


        `;



        tabla.appendChild(fila);



    });



}





//=========================================
// BUSCAR HISTORIAL
//=========================================


function buscarHistorial(){


    const texto =

    document.getElementById(
    "buscarHistorial"
    )
    .value
    .toUpperCase();



    const tabla =
    document.getElementById(
    "tablaHistorial"
    );



    tabla.innerHTML="";



    let historial =
    obtenerHistorial();



    let resultados =

    historial.filter(
    registro =>


    registro.folio
    .toUpperCase()
    .includes(texto)


    ||

    registro.rfcProveedor
    .toUpperCase()
    .includes(texto)


    ||

    registro.rfcContribuyente
    .toUpperCase()
    .includes(texto)



    );




    resultados.forEach(
    registro=>{


        let fila =
        document.createElement(
        "tr"
        );


        fila.innerHTML=`

        <td>
        ${registro.fecha}
        </td>


        <td>
        ${registro.folio}
        </td>


        <td>
        ${registro.rfcProveedor}
        </td>


        <td>
        ${registro.producto}
        </td>

        `;



        tabla.appendChild(fila);



    });



}





//=========================================
// LIMPIAR HISTORIAL
//=========================================


function eliminarHistorial(){


    if(
        confirm(
        "¿Desea eliminar todo el historial?"
        )
    ){


        localStorage.removeItem(
        "historialXML"
        );


        mostrarHistorial();


    }


}