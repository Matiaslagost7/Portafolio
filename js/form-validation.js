// js/form-validation.js

/**
 * Valida un correo electrónico usando una expresión regular.
 * @param {string} email - El correo a validar.
 * @returns {boolean} - True si el correo es válido.
 */
function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida la longitud mínima de un texto.
 * @param {string} text - El texto a validar.
 * @param {number} minLength - La longitud mínima requerida.
 * @returns {boolean} - True si el texto cumple con la longitud mínima.
 */
function isTextValid(text, minLength) {
    return text.trim().length >= minLength;
}

/**
 * Muestra un mensaje de error para un campo del formulario.
 * @param {HTMLElement} field - El campo del formulario.
 * @param {string} message - El mensaje de error a mostrar.
 */
function showError(field, message) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

/**
 * Marca un campo como válido.
 * @param {HTMLElement} field - El campo del formulario.
 */
function showValid(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

/**
 * Muestra un mensaje de estado (éxito o error) para el formulario.
 * @param {string} type - 'success' o 'error'.
 * @param {string} text - El mensaje a mostrar.
 */
function showFormMessage(type, text) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.className = `mt-3 text-center alert alert-${type === 'success' ? 'success' : 'danger'}`;
    messageDiv.textContent = text;
    messageDiv.style.display = 'block';

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

/**
 * Inicializa la validación del formulario de contacto.
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameField = document.getElementById('nombre');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('mensaje');

    nameField.addEventListener('blur', () => {
        if (!isTextValid(nameField.value, 3)) {
            showError(nameField, 'El nombre debe tener al menos 3 caracteres.');
        } else {
            showValid(nameField);
        }
    });

    emailField.addEventListener('blur', () => {
        if (!isTextValid(emailField.value, 1)) {
            showError(emailField, 'El correo es obligatorio.');
        } else if (!isEmailValid(emailField.value)) {
            showError(emailField, 'Por favor ingresa un correo electrónico válido.');
        } else {
            showValid(emailField);
        }
    });

    messageField.addEventListener('blur', () => {
        if (!isTextValid(messageField.value, 10)) {
            showError(messageField, 'El mensaje debe tener al menos 10 caracteres.');
        } else {
            showValid(messageField);
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = isTextValid(nameField.value, 3);
        const isEmailValidValue = isEmailValid(emailField.value);
        const isMessageValid = isTextValid(messageField.value, 10);

        if (isNameValid) showValid(nameField); else showError(nameField, 'El nombre debe tener al menos 3 caracteres.');
        if (isEmailValidValue) showValid(emailField); else showError(emailField, 'Por favor ingresa un correo electrónico válido.');
        if (isMessageValid) showValid(messageField); else showError(messageField, 'El mensaje debe tener al menos 10 caracteres.');

        if (isNameValid && isEmailValidValue && isMessageValid) {
            showFormMessage('success', '¡Mensaje enviado con éxito! Gracias por contactarme.');
            contactForm.reset();
            [nameField, emailField, messageField].forEach(field => field.classList.remove('is-valid'));
        } else {
            showFormMessage('error', 'Por favor corrige los errores antes de enviar.');
        }
    });
}

export { initFormValidation };
