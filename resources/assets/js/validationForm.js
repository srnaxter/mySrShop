$(function () {
    $("#titulo").on("change", validarTitulo);
    $("#precio").on("change", validarPrecio);
    $("#descripcion").on("change", validarDescripcion);
    $('#enviar').on("click", validarTodo);
});

function validarTitulo() {
    let regex = /^[A-Z0-5]*$/;
    let inputTitulo = $("#titulo");
    let titulo = inputTitulo.val();

    if (!name.match(regex) || titulo === "") {
        $('#ti').removeClass('is-valid');
        $('#titulo').addClass('is-invalid');
        $('#errorTitulo').html("Mínimo de 4 caracteres" + "\n" +
            "Máximo de 15" + "\n" +
            "Caracteres de la A-z y números").addClass('is-invalid');
    } else {
        $('#titulo').removeClass('is-invalid');
        $('#titulo').addClass('is-valid');

        $('#errorTitulo').removeClass('is-invalid');
        $('#errorTitulo').html('');
    }
}

function validarPrecio() {
    let regex = /($[0-9,]+(.[0-9]{2})?)/;
    let inputPrecio = $("#precio");
    let precio = inputPrecio.val();

    if (!name.match(regex) || precio === "") {
        $('#ti').removeClass('is-valid');
        $('#precio').addClass('is-invalid');
        $('#errorPrecio').html("Error de precio").addClass('is-invalid');
        // Los precios vienen en una variedad de formatos que pueden contener decimales, comas y símbolos de moneda.
        // Esta expresión regular puede comprobar todos estos diferentes formatos para sacar el precio de cualquier cadena.
        // Los precios vienen en una variedad de formatos que pueden contener decimales, comas y símbolos de moneda.
        // Esta expresión regular puede comprobar todos estos diferentes formatos para sacar el precio de cualquier cadena.
    } else {
        $('#precio').removeClass('is-invalid');
        $('#precio').addClass('is-valid');

        $('#errorPrecio').removeClass('is-invalid');
        $('#errorPrecio').html('');
    }
}

function validarDescripcion() {
    let regex = /^[\s\S]{15,200}$/;
    let inputDescripcion = $("#descripcion");
    let descripcion = inputDescripcion.val();

    if (!name.match(regex) || descripcion === "") {
        $('#ti').removeClass('is-valid');
        $('#descripcion').addClass('is-invalid');
        $('#errorDescripcion').html("Mínimo de 4 caracteres" + "\n" +
            "Máximo de 15" + "\n" +
            "Caracteres de la A-z y números").addClass('is-invalid');
    } else {
        $('#descripcion').removeClass('is-invalid');
        $('#descripcion').addClass('is-valid');

        $('#errorDescripcion').removeClass('is-invalid');
        $('#errordescripcion').html('');
    }
}

function validarTodo(e) {
    e.preventDefault();
    $('button').prop("disabled", true);

    let tituloCorrecto = validarTitulo();
    let precioCorrecto = validarPrecio();
    let descripcionCorrecta = validarDescripcion();

    if (tituloCorrecto && precioCorrecto && descripcionCorrecta) {
        $('#formulario').submit();
    }

    $('button').prop("disabled", false);
}