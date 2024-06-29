document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpiar errores previos
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });

    let isValid = true;

    // Validación del nombre
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
        isValid = false;
    }

    // Validación del correo electrónico
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido.';
        isValid = false;
    }

    // Validación de la fecha de nacimiento
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === '') {
        document.getElementById('birthdateError').textContent = 'La fecha de nacimiento es obligatoria.';
        isValid = false;
    }

    // Validación del país
    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').textContent = 'El país es obligatorio.';
        isValid = false;
    }

    // Validación del interés
    const interest = document.getElementById('interest').value;
    if (interest === '') {
        document.getElementById('interestError').textContent = 'El interés es obligatorio.';
        isValid = false;
    }

    // Validación del género
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').textContent = 'El género es obligatorio.';
        isValid = false;
    }

    // Validación del CI escaneado
    const idCard = document.getElementById('idCard').files[0];
    if (!idCard) {
        document.getElementById('idCardError').textContent = 'Debe subir una copia escaneada de su CI.';
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario al servidor
    }
});
