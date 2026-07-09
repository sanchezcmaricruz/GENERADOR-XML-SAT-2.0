//=========================================
// MODULO AYUDA
//=========================================


//=========================================
// ABRIR AYUDA
//=========================================


function mostrarAyuda(){


    const ventana =

    document.getElementById(
    "ventanaAyuda"
    );



    if(ventana){

        ventana.style.display="flex";

    }



}





//=========================================
// CERRAR AYUDA
//=========================================


function cerrarAyuda(){


    const ventana =

    document.getElementById(
    "ventanaAyuda"
    );



    if(ventana){

        ventana.style.display="none";

    }



}





//=========================================
// TEXTO DE AYUDA DINÁMICO
//=========================================


function cargarAyuda(){



const contenido =

document.querySelector(
"#ventanaAyuda .modal-contenido"
);



if(!contenido){

    return;

}




contenido.innerHTML = `


<span 
class="cerrar"
onclick="cerrarAyuda()">

&times;

</span>



<h2>
❓ Ayuda del Sistema
</h2>



<hr>



<h3>
📄 Generación de Folios
</h3>


<p>

El folio se genera automáticamente con:

<br><br>

<strong>

RFC del proveedor + consecutivo + año

</strong>

<br><br>

Ejemplo:

<br>

RFCABC000012026

</p>




<h3>
🔢 Consecutivo</h3>


<p>

El sistema guarda un consecutivo independiente
para cada año.

<br><br>

Aunque cierre el navegador,
la numeración continuará desde donde quedó.

</p>





<h3>
✏ Editar Folio</h3>


<p>

Esta opción permite modificar manualmente
un folio cuando sea necesario corregir un registro.

<br><br>

Se recomienda utilizarla únicamente para casos especiales.

</p>





<h3>
⚙ Administración</h3>


<p>

Las funciones administrativas permiten:

<br><br>

✔ Cambiar consecutivos.

<br>

✔ Corregir folios.

<br>

✔ Administrar configuraciones.

</p>





<h3>
⚠ Recomendación</h3>


<p>

Realice respaldos periódicos para conservar
su información.

</p>



`;



}





document.addEventListener(

"DOMContentLoaded",

()=>{


cargarAyuda();


}

);