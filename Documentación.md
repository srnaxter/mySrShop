## Sprint 1 (09-04-2018)

**1. **Definir las validaciones de todos los formularios de la aplicación.

**Formulario Usuarios**

Correo: No puede estar vacio ni lleno de espacios, validación de correo, maximo 50 palabras

Contraseña: No puede estar vacio ni lleno de espacios, que contenga minimo 6 caracteres, que contenga mayuscula, minuscula y numero.
Repite contraseña:no puede estar vacio ni lleno de espacios, que se repita el campo contraseña.

**Fomurlario Producto**

Titulo producto: No puede estar vacio ni lleno de espacios, minimo 3 letras, maximo 30 letras, no se puede poner numero ni caracteres, pero si mayuscula y minuscula.

Precio del producto: No puede estas vacio ni lleno de espacios, solo podra meter numero incluido decimales, maximo 2 decimales.

Talla: Es un select que no hace falta validarlo porque viene predeterminado una talla

Categoria: Es un select que no hace falta validarlo porque viene predeterminado una categoria

Descripcion: No puede estar vacio ni lleno de espacios, minimo 30 letras y maximo 600 letras pede contener mayusculas y minuscula y numero pero no caracteres

**2.** Definir funcionalidades javascript que existirán en la aplicación.

Funcion que el modal habra una pestalla de alerts para la eliminacion de un producto
Funcion la cual se cambie automáticamente al hacer un cambio en el perfil
Funcion que haga qe cuando la valoracion se haga se que ya modificada sin salir de la pagina
Funcion que se escriba un comentario y se ponga automáticamente al enviarlo

**3.** Definir Librerías javascript que se van a usar en la aplicación.

*modal* para usar la alerta cuando elimine un producto
jQueryUI: *Autocomplete* para ayudar a la búsqueda de un producto

jQueryUI: *Tooltip* para ayudar con los input del formulario

**4.** Definir Componentes que usan CSS y Javascript.

Bootstrap: *izimodal* para la alerta cuando un producto es borrado, menu *navbar* para indicar la barra de navegación principal de la aplicación, *glyphicons* para poner iconos en la aplicación, *Button addons* para la barra de busqueda, *Pagination* para poder cambiar las diferente paginas

**5.** Definir funcionalidades con peticiones al servidor de forma asíncrona.

Buscar de forma asimentrica sin que cambien de ventana o pestaña, la edicion del perfil del usuario asimétricamente para cuando edites el usuario cambie sin cambiar de pestaña, la valoraciones y comentarios del producto que se añada asimetricamente
