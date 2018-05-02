$(function () {
    $("#name").on("change", validarNombre);
    $("#email").on("change", validarEmail);
    $("#password").on("change", validarPassword);
    $("#password-confirm").on("change", validarPasswordConfirm);
    $('#checkbox').on("change",validarCheckbox);
    $('#enviar').on("click", validarTodo);
});

function validarNombre() {
    let regex = /^[aA-zZ0-5]*$/;
    let inputName = $("#name");
    let name = inputName.val();
    let esCorrecto = false;


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
        esCorrecto = true;
    }
    return esCorrecto;
}

function validarEmail() {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let inputEmail = $("#email");
    let email = inputEmail.val();
    let esCorrecto = false;

    if (!email.match(regex) || email === "") {
        $('#email').removeClass('is-valid');
        $('#email').addClass('is-invalid');
        $('#errorEmail').html("Error de Email").addClass('is-invalid');
    } else {
        $('#email').removeClass('is-invalid');
        $('#email').addClass('is-valid');

        $('#errorEmail').removeClass('is-invalid');
        $('#errorEmail').html('');
        esCorrecto = true;
    }
    return esCorrecto;
}

function validarPassword() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let inputPassword = $("#password");
    let password = inputPassword.val();
    let esCorrecto = false;

    if (!password.match(regex) || password === "") {
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
        esCorrecto = true
    }
    return esCorrecto;
}

function validarPasswordConfirm() {

    let inputPassword = $("#password");
    let inputPasswordConfirm = $("#password-confirm");
    let password = inputPassword.val();
    let passwordConfirm = inputPasswordConfirm.val();
    let esCorrecto = false;

    if (passwordConfirm.localeCompare(password) !== 0 || passwordConfirm === "") {
        inputPasswordConfirm.removeClass('is-valid');
        inputPasswordConfirm.addClass('is-invalid');
        $('#errorPasswordConfirm').html("Contraseña no coincide").addClass('is-invalid');
    } else {
        inputPasswordConfirm.removeClass('is-invalid');
        inputPasswordConfirm.addClass('is-valid');

        $('#errorPasswordConfirm').removeClass('is-invalid');
        $('#errorPasswordConfirm').html('');
        esCorrecto = true
    }
    return esCorrecto;
}

function validarCheckbox() {
    let esCorrecto = false;

    if (!$('#checkbox').prop('checked')) {
        $('#errorCheckbox').html('Debes pulsar el checkbox').addClass('error');
    }else{
        $('#errorCheckbox').removeClass('error');
        $('#errorCheckbox').html('');
        esCorrecto = true
    }
    return esCorrecto;
}



function validarTodo(e) {
    e.preventDefault();
    $('button').prop("disabled", true);

    let nombreCorrecto = validarNombre();
    let emailCorrecto = validarEmail();
    let passwordCorrecta = validarPassword();
    let passwordConfimCorrec = validarPasswordConfirm();
    let checkboxCorrecto = validarCheckbox();

    if (nombreCorrecto && emailCorrecto && passwordCorrecta && passwordConfimCorrec && checkboxCorrecto) {
        $('#formulario').submit();
    }

    $('button').prop("disabled", false);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});