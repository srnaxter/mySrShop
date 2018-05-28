/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

$(function () {
    $("#name").on("change", validarNombre);
    $("#email").on("change", validarEmail);
    $("#password").on("change", validarPassword);
    $("#password-confirm").on("change", validarPasswordConfirm);
    $('#checkbox').on("change", validarCheckbox);
    $('#enviar').on("click", validarTodo);
});

function validarNombre() {
    var regex = /^[aA-zZ0-5]*$/;
    var inputName = $("#name");
    var name = inputName.val();
    var esCorrecto = false;

    if (!name.match(regex) || name === "") {
        $('#name').removeClass('is-valid');
        $('#name').addClass('is-invalid');
        $('#errorName').html("Mínimo de 4 caracteres" + "\n" + "Máximo de 15" + "\n" + "Caracteres de la A-z y números").addClass('is-invalid');
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
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var inputEmail = $("#email");
    var email = inputEmail.val();
    var esCorrecto = false;

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
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    var inputPassword = $("#password");
    var password = inputPassword.val();
    var esCorrecto = false;

    if (!password.match(regex) || password === "") {
        $('#password').removeClass('is-valid');
        $('#password').addClass('is-invalid');
        $('#errorPassword').html("" + "    Minimo 8 caracteres" + "    Maximo 15" + "    Al menos una letra mayúscula" + "    Al menos una letra minucula" + "    Al menos un dígito" + "    No espacios en blanco" + "    Al menos 1 caracter especial").addClass('is-invalid');
    } else {
        $('#password').removeClass('is-invalid');
        $('#password').addClass('is-valid');

        $('#errorPassword').removeClass('is-invalid');
        $('#errorPassword').html('');
        esCorrecto = true;
    }
    return esCorrecto;
}

function validarPasswordConfirm() {

    var inputPassword = $("#password");
    var inputPasswordConfirm = $("#password-confirm");
    var password = inputPassword.val();
    var passwordConfirm = inputPasswordConfirm.val();
    var esCorrecto = false;

    if (passwordConfirm.localeCompare(password) !== 0 || passwordConfirm === "") {
        inputPasswordConfirm.removeClass('is-valid');
        inputPasswordConfirm.addClass('is-invalid');
        $('#errorPasswordConfirm').html("Contraseña no coincide").addClass('is-invalid');
    } else {
        inputPasswordConfirm.removeClass('is-invalid');
        inputPasswordConfirm.addClass('is-valid');

        $('#errorPasswordConfirm').removeClass('is-invalid');
        $('#errorPasswordConfirm').html('');
        esCorrecto = true;
    }
    return esCorrecto;
}

function validarCheckbox() {
    var esCorrecto = false;

    if (!$('#checkbox').prop('checked')) {
        $('#errorCheckbox').html('Debes pulsar el checkbox').addClass('error');
    } else {
        $('#errorCheckbox').removeClass('error');
        $('#errorCheckbox').html('');
        esCorrecto = true;
    }
    return esCorrecto;
}

function validarTodo(e) {
    e.preventDefault();
    $('button').prop("disabled", true);

    var nombreCorrecto = validarNombre();
    var emailCorrecto = validarEmail();
    var passwordCorrecta = validarPassword();
    var passwordConfimCorrec = validarPasswordConfirm();
    var checkboxCorrecto = validarCheckbox();

    if (nombreCorrecto && emailCorrecto && passwordCorrecta && passwordConfimCorrec && checkboxCorrecto) {
        $('#formulario').submit();
    }

    $('button').prop("disabled", false);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/***/ })

/******/ });