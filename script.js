// ==========================================
// SCRIPT.JS - FUNCIONALIDADES DEL PORTAFOLIO
// ==========================================

// ========== 1. SCROLL SUAVE ==========
// Cuando haces clic en un enlace interno (como #about, #skills)
// la página se desplaza suavemente en lugar de saltar
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
    enlace.addEventListener('click', function(evento) {
        evento.preventDefault();
        var destino = this.getAttribute('href');
        document.querySelector(destino).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ==========================================
// 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ==========================================

// Función que verifica si el email es válido
// Debe tener formato: texto@texto.texto
function validarEmail(email) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

// Función que verifica si el texto tiene el mínimo de caracteres
function validarTexto(texto, minimo) {
    return texto.trim().length >= minimo;
}

// Función que muestra un error en el campo
function mostrarError(campo, mensaje) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    var mensajeError = campo.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains('invalid-feedback')) {
        mensajeError.textContent = mensaje;
        mensajeError.style.display = 'block';
    }
}

// Función que muestra que el campo es válido
function mostrarValido(campo) {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    var mensajeError = campo.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains('invalid-feedback')) {
        mensajeError.style.display = 'none';
    }
}

// Función que muestra mensaje de éxito o error
function mostrarMensaje(tipo, texto) {
    var mensajeDiv = document.getElementById('formMessage');
    if (tipo === 'success') {
        mensajeDiv.className = 'mt-3 text-center alert alert-success';
    } else {
        mensajeDiv.className = 'mt-3 text-center alert alert-danger';
    }
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = 'block';
    
    // Ocultar después de 5 segundos
    setTimeout(function() {
        mensajeDiv.style.display = 'none';
    }, 5000);
}

// ========== VALIDACIÓN DEL FORMULARIO ==========
// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('contactForm');
    
    // Si no encuentra el formulario, sale de la función
    if (!formulario) {
        return;
    }
    
    // Obtener los campos del formulario
    var campoNombre = document.getElementById('nombre');
    var campoEmail = document.getElementById('email');
    var campoMensaje = document.getElementById('mensaje');
    
    // Validar NOMBRE cuando el usuario sale del campo
    campoNombre.addEventListener('blur', function() {
        if (!validarTexto(this.value, 3)) {
            mostrarError(this, 'El nombre debe tener al menos 3 caracteres.');
        } else {
            mostrarValido(this);
        }
    });
    
    // Validar EMAIL cuando el usuario sale del campo
    campoEmail.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            mostrarError(this, 'El correo es obligatorio.');
        } else if (!validarEmail(this.value)) {
            mostrarError(this, 'El correo no es válido.');
        } else {
            mostrarValido(this);
        }
    });
    
    // Validar MENSAJE cuando el usuario sale del campo
    campoMensaje.addEventListener('blur', function() {
        if (!validarTexto(this.value, 10)) {
            mostrarError(this, 'El mensaje debe tener al menos 10 caracteres.');
        } else {
            mostrarValido(this);
        }
    });
    
    // Validar cuando se envía el formulario
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        var esValido = true;
        
        // Validar nombre
        if (!validarTexto(campoNombre.value, 3)) {
            mostrarError(campoNombre, 'El nombre debe tener al menos 3 caracteres.');
            esValido = false;
        } else {
            mostrarValido(campoNombre);
        }
        
        // Validar email
        if (campoEmail.value.trim() === '') {
            mostrarError(campoEmail, 'El correo es obligatorio.');
            esValido = false;
        } else if (!validarEmail(campoEmail.value)) {
            mostrarError(campoEmail, 'El correo no es válido.');
            esValido = false;
        } else {
            mostrarValido(campoEmail);
        }
        
        // Validar mensaje
        if (!validarTexto(campoMensaje.value, 10)) {
            mostrarError(campoMensaje, 'El mensaje debe tener al menos 10 caracteres.');
            esValido = false;
        } else {
            mostrarValido(campoMensaje);
        }
        
        // Si todo está bien, mostrar mensaje de éxito
        if (esValido) {
            mostrarMensaje('success', '✓ ¡Mensaje enviado exitosamente! Te responderé pronto.');
            formulario.reset();
            // Limpiar clases en todos los campos
            [campoNombre, campoEmail, campoMensaje].forEach(function(c){
                c.classList.remove('is-valid','is-invalid');
            });
        } else {
            // Mostrar mensaje de error
            mostrarMensaje('error', '✗ Por favor corrige los errores antes de enviar el formulario.');
            
            // Hacer scroll al primer campo con error
            const primerError = formulario.querySelector('.is-invalid');
            if (primerError) {
                primerError.focus();
                primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});