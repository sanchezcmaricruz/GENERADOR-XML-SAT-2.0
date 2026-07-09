//=========================================
// MODULO GENERADOR XML
//=========================================


// Escapar caracteres especiales XML
function escaparXML(texto){

    if(!texto){
        return "";
    }


    return texto
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&apos;");

}





//=========================================
// GENERAR XML
//=========================================


function generarXML(){


    const datos = {

        rfcContribuyente:
        document.getElementById(
        "rfcContribuyente"
        ).value.trim().toUpperCase(),


        rfcRepresentanteLegal:
        document.getElementById(
        "rfcRepresentanteLegal"
        ).value.trim().toUpperCase(),


        rfcProveedorDictamen:
        document.getElementById(
        "rfcProveedor"
        ).value.trim().toUpperCase(),


        rfcRepresentanteLegalProveedor:
        document.getElementById(
        "rfcRepresentanteLegalProveedor"
        ).value.trim().toUpperCase(),


        fechaEmisionDictamen:
        document.getElementById(
        "fecha"
        ).value,


        numeroFolioDictamen:
        document.getElementById(
        "folio"
        ).value,


        Producto:
        document.getElementById(
        "Producto"
        ).value,


        rfcPersonal:
        document.getElementById(
        "rfcPersonal"
        ).value.trim().toUpperCase()

    };





    // Validaciones

    if(
        !datos.rfcContribuyente ||
        !datos.rfcProveedorDictamen ||
        !datos.fechaEmisionDictamen ||
        !datos.numeroFolioDictamen
    ){

        alert(
        "Complete los datos obligatorios antes de generar XML."
        );

        return;

    }





    let xml =

`<?xml version="1.0" encoding="utf-8"?>

<Covol:Dictamen

xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xmlns:Covol="https://repositorio.cloudb.sat.gob.mx/Covol/xml/Dictamen"

xsi:schemaLocation="https://repositorio.cloudb.sat.gob.mx/Covol/xml/Dictamen https://repositorio.cloudb.sat.gob.mx/Covol/xml/Dictamen.xsd">


<Covol:RfcContribuyente>${escaparXML(datos.rfcContribuyente)}</Covol:RfcContribuyente>


<Covol:RfcRepresentanteLegal>${escaparXML(datos.rfcRepresentanteLegal)}</Covol:RfcRepresentanteLegal>


<Covol:RfcProveedorDictamen>${escaparXML(datos.rfcProveedorDictamen)}</Covol:RfcProveedorDictamen>


<Covol:RfcRepresentanteLegalProveedor>${escaparXML(datos.rfcRepresentanteLegalProveedor)}</Covol:RfcRepresentanteLegalProveedor>



<Covol:InformacionPrueba>


<Covol:FechaEmisionDictamen>${datos.fechaEmisionDictamen}</Covol:FechaEmisionDictamen>


<Covol:NumeroFolioDictamen>${escaparXML(datos.numeroFolioDictamen)}</Covol:NumeroFolioDictamen>


<Covol:Producto>${escaparXML(datos.Producto)}</Covol:Producto>


<Covol:RfcPersonal>${escaparXML(datos.rfcPersonal)}</Covol:RfcPersonal>


</Covol:InformacionPrueba>


</Covol:Dictamen>`;






// Crear archivo

const blob = new Blob(
    [xml],
    {
        type:"application/xml"
    }
);



const url =
URL.createObjectURL(blob);



const enlace =
document.createElement("a");



enlace.href=url;



enlace.download =

`DI-${datos.rfcContribuyente}_${datos.numeroFolioDictamen}.xml`;



document.body.appendChild(enlace);


enlace.click();


document.body.removeChild(enlace);



URL.revokeObjectURL(url);





// Guardar historial

guardarHistorial(datos);



alert(
"XML generado correctamente."
);


}