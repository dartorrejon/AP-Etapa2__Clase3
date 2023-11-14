# Argentina Programa - Clase 3

### Ejercicio

Crear una aplicación con react cli llamada "myapp".
Desarrollar el maquetado de una pagina de detalle de un producto para un sitio de ecommerce, se deberán visualizar los siguientes datos:
* Nombre
* Descripción
* Precio
* SKU
* Cantidad disponible

Realizar un maquetado con los datos, desarrollado con componentes.


El proyecto se realizo con **React + Vite** para aprender el uso de *components, props y hooks* para el desarrollo web.
* Para crear una app React con Vite ejecutar el siguiente comando(previamente tener instalado Vite):
```npm
$ npm create vite@latest
```
* Para correr el proyecto en modo desarrollo utilizar el comando:
```node
npm run dev
```
* Instalar gh Pages para poder hacer el deploy en GitHub:
```node
npm install gh-pages --save-dev
``` 
* Luego agregar al archivo *package.json* en los scripts la siguiente linea:
```javascript
"deploy": "gh-pages -d dist"
```
* Finalmente agregar al archivo *vite.config.js* la siguiente linea de codigo  base: '/AP-Etapa2__Clase3/':
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/AP-Etapa2__Clase3/',
})
```
* Para crear la carpeta dist y poder deployarlo en GitHub Pages correr el comando:
```node
npm run build
```
* Para deployar el proyecto en GitHub Pages ejecutar el comando:
```node
npm run deploy
```
1. Repositorio del proyecto en: [https://github.com/dartorrejon](https://github.com/dartorrejon/AP-Etapa2__Clase3) 💻
2. Se encuentra deployado en: [https://dartorrejon.github.io/AP-Etapa2__Clase3/](https://dartorrejon.github.io/AP-Etapa2__Clase3/) 🚀


