# Jota.Tienda
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

* Armado web utilizando EJS como motor parala diagramacion del mismo.
* Una peticion hacia un "custom module" llamado "dataSite.js" para la configuración general del site (Header Nav, Footer, modulos Home, etc).
* Una base de datos no relacional donde se administran los productos/obras de la artista subida a Atlas y requerida usando el "third party module" Postman Request. Esta ultima trabaja con la REST API adjuntada (https://github.com/jpsando/api-rest) y se puede visualizar en la siguiente URL: https://apirest-jotatienda.herokuapp.com/json/products
* Un modulo de suscripcion a newsletter que trabaja directamente con Mailchimp.
* Un formulario de envio de consulta en el final del circuito del usuario para solicitar el producto. Esto esta en etapa de desarrollo por problemas con el funcionamientod del "third party module" Nodemailer. [AUN NO TERMINADO]

Keywords: NodeJS, EJS, Heroku, Express, Bootstrap, NodeMailer, Postman Request

## Levantar el proyecto
Para levantar el proyecto local:

1. Descarga del repo

2. Instalar módulos en el / 

    ```
    npm i
    ```
  
### Levantar Website
Una vez instalados los modulos, levantar el website con los comandos node app.js o nodemon app.js en la raiz /
