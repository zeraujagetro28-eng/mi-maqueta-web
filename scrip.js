// Función para confirmar el registro (Principio Comprensible)
function confirmarRegistro(event) {
    // Evita que la página se recargue al presionar el botón
    event.preventDefault();

    // Obtenemos el nombre del campo de texto
    const nombre = document.getElementById('nombre').value;

    if (nombre === "") {
        alert("Por favor, escribe tu nombre para continuar con el registro.");
    } else {
        // Mensaje de éxito basado en el objetivo del proyecto
        alert("¡Gracias, " + nombre + "! Tu solicitud para 'Aprende y Emprende Comunitario' ha sido enviada. Nos pondremos en contacto contigo pronto.");
        
        // Opcional: Limpiar el formulario después de enviar
        document.querySelector('.formulario').reset();
    }
}

// Registro de log en consola para verificar que el sitio es Robusto
console.log("Sitio web 'Aprende y Emprende Comunitario' cargado correctamente bajo metodología POUR.");