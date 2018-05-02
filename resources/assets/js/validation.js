$(function () {
    $("#name").on("change", validarNombre);
    $("#email").on("change", validarEmail);
    $("#password").on("change", validarPassword);
    $('#enviar').on("click", validarTodo);
});

function validarNombre() {
    let regex = /^[A-Z0-5]*$/;
    let inputName = $("#name");
    let name = inputName.val();

    if (!name.match(regex) || name === "") {
        $('#name').removeClass('is-valid');
        $('#name').addClass('is-invalid');
        $('#errorName').html("Mínimo de 4 caracteres" + "\n" +
            "Máximo de 15" + "\n" +
            "Caracteres de la A-z y números").addClass('is-invalid');
    } else {
        $('#name').removeClass('is-invalid');
        $('#name').addClass('is-valid');

        $('#errorName').removeClass('is-invalid');
        $('#errorName').html('');
    }
}

function validarEmail() {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let inputEmail = $("#email");
    let name = inputEmail.val();

    if (!name.match(regex) || email === "") {
        $('#email').removeClass('is-valid');
        $('#email').addClass('is-invalid');
        $('#errorEmail').html("Error de Email").addClass('is-invalid');
    } else {
        $('#email').removeClass('is-invalid');
        $('#email').addClass('is-valid');

        $('#errorEmail').removeClass('is-invalid');
        $('#errorEmail').html('');
    }
}

function validarPassword() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let inputPassword = $("#password");
    let name = inputPassword.val();

    if (!name.match(regex) || email === "") {
        $('#password').removeClass('is-valid');
        $('#password').addClass('is-invalid');
        $('#errorPassword').html("" +
            "    Minimo 8 caracteres" +
            "    Maximo 15" +
            "    Al menos una letra mayúscula" +
            "    Al menos una letra minucula" +
            "    Al menos un dígito" +
            "    No espacios en blanco" +
            "    Al menos 1 caracter especial").addClass('is-invalid');
    } else {
        $('#password').removeClass('is-invalid');
        $('#password').addClass('is-valid');

        $('#errorPassword').removeClass('is-invalid');
        $('#errorPassword').html('');
    }
}


function validarTodo(e) {
    e.preventDefault();
    $('button').prop("disabled", true);

    let nombreCorrecto = validarNombre();
    let emailCorrecto = validarEmail();
    let passwordCorrecta = validarPassword();

    if (nombreCorrecto && emailCorrecto && passwordCorrecta) {
        $('#formulario').submit();
    }

    $('button').prop("disabled", false);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});