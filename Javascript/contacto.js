
    function enviarFormulario(event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente (simulación)
        
        // Oculta el formulario y muestra el mensaje
        document.getElementById('formulario-contacto').style.display = 'none';
        document.getElementById('mensaje-exito').style.display = 'block';
    }

    function ocultarMensaje() {
        document.getElementById('mensaje-exito').style.display = 'none';
        document.getElementById('formulario-contacto').style.display = 'block';
        document.getElementById('formulario-contacto').reset();
    }
