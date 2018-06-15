#MySrShop

Proyecto de una tienda online en php con el framework de laravel.

## Sobre el proyecto

Para lanzar el proyecto, necesita los siguientes componentes:

- [PHP](http://php.net/manual/es/install.php)
- [Composer](https://getcomposer.org/download/) 
- [Node.js](https://nodejs.org/es/)
- [VitualBox](https://www.virtualbox.org/wiki/Downloads)

---

En el terminal, vaya a la carpeta donde va a alojar el proyecto y usa:


```git clone https://github.com/srnaxter/mySrShop.git```

Configuracíón del proyecto:

En `/Homestead`, modifique `homestead.yaml` haciendo `vi homestead.yaml` y añada las rutas de **folder**, **sites** y **database** rutas:

![Imgur](http://i.imgur.com/iHK6Lce.png)

Vaya a la carpeta `etc/`, abra el archivo de `hosts` y agregue el ip de `homestead.yaml`.

Ya con todo modificado, ponemos el servidor en marcha, dependiendo del que usemos (Vagrant, Mamp, etc...)

**_Si usamos vagrant, en la carpeta `Homestead/`, escriba `vagrant up --provision`._**

Utilice el siguiente comando para generar la APP_KEY:

`php artisan key:generate`

## Instalación de componentes


Escriba los siguientes comandos para instalar todos los componentes necesarios:

`composer install`

`npm install`

`php artisan migrate`

## Características

Como usuario registrado:

Crear, editar y borrar producto.
Ver carrito con el nombre de producto precio y total
**Como usuario no registrado**:

Registrarse.
Ver carrito con el nombre de producto precio y total
Iniciar sesión (si está registrado).
Ver página principal con preguntas.
