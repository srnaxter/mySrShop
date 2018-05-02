# Sprint 1 (09-04-2018)

- Para homogenizar el formato de todos los documentos, la estrucuctura del mismo será la siguiente:
  - Formularios. Indicar con PAS aquellas restricciones que son necesarias consultas al servidor.
  - Funcionalidades Javascript.Indicando con PAS aquellas que podrían o deberían hacerse con  peticiones al servidor.
  - Librerías.Por ejemplo:
    - Bootstrap:
      - Dropdown-> Para desplegar categorías
    - Jquery-ui:
      - Autocomplete
    - Iconos
- A continuación se detallan mejoras, ejemplos e indicaciones:

* Consideraciones:

  * Debería poder votarse los productos
  * En tu caso deberías crear un modelo/tabla que se enlace, y que se pueda asociar a los productos, es decir, un producto tendría varios enlaces dónde se pueden comprar dicho producto y con el valor actual.
  * Permitir crear categorías de productos para facilitar su organización.
  * No es asimétrica, es asíncrona.

* Formularios:

  * Esquematizar un poco más las resctricciones de los campos del formulario.
  * Indicar las expresiones regulares que se permiten.
  * Debería incluirse los formularios de Categorías,Tallas y Comentarios.

* Funcionalidades javascript que se podrían incluir. Incluyo PAS en aquellos casos que se debería o se podría hacer con peticiones asíncronas al servidor:

  * Validación de formularios. (PAS)
  * Función para filtrar productos, por ejemplo el precio. (PAS)
  * Función para filtrar enlaces de un producto. (PAS)
  * Permitir modificar el formulario de crear un producto dependiendo de la categoría que existe.
  * Crear, editar y eliminar productos. (PAS)
  * Crear, editar y eliminar enlaces. (PAS)
  * Asociar enlaces a un producto.
  * Incluir más ejemplos.

* Librerías:

  * Jquery-ui
  * Bootstrap
  * IziModal(No es de bootstrap, es una librería aparte)
  * Glyphicons 

* Ejemplos de Componentes CSS y JS que puedes usar, por ejemplo:

  * Bootstrap:
    * Navs => Para crear un sistema de pestañas.
    * NavBar => Menu navegación de la apicación.
  * Jquer-ui:
    * Autocomplete
    * Tooltip (Aunque ya existe uno en Bootstrap)

