# Project - Pokemon

<p align="center">
   <img src="https://img.shields.io/badge/License-MIT-green">
    <img src="https://img.shields.io/badge/Status-ESTABLE-blue">
</p>

<img height="60" src="https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png"/>

[<img height="150" src="./pokemon.png" />](https://project-pokemon-psi.vercel.app/)

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Practicar el workflow de GIT.

**Cuenta con la última versión estable de Node y NPM.**

- **Node**: 16.16.0
- **NPM**: 8.11.0

> **Importante:** Las dependencias actuales se encuentran en las siguientes versiones:

- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

## .env api

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_PORT=3001
DB_NAME=nombreDeDataBase
```

## .env client

```env
REACT_APP_URL=http://localhost:3001
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible.

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

## Descripción

Es una aplicación donde se pueden ver diferentes pokemons al consultar una [api](https://pokeapi.co/) externa con endpoints específicos.
En el frontend tiene una landing page con un botón que te lleva a home, donde se renderizan 15 cartas de diferentes pokemons, al igual que un paginado dinámico de acuerdo a la cantidad de pokemons (En primer instancia 40), cuenta con una barra de navegación que contiene el logo de pokemons, un search y el menú. El menú es desplegable y contiene los filtrados, ordenamientos y el botón que te lleva a un formulario con validaciones javascript para crear un pokemon.
En el backend se crearon las rutas para consultar el tipo, nombre y traer a 40 pokemons desde la api, ademas de una ruta para crear pokemons que se guardan en una base de datos, donde almacena los tipos y los pokemons.

**IMPORTANTE**: Para las funcionalidades de filtrado y ordenamiento NO se ocuparon los endpoints de la API externa.Alguno de los ordenamientos y filtrados se realizarón desde el frontend.

## Endpoints/Flags utilizados

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/pokemon/{name}>
- GET <https://pokeapi.co/api/v2/type>

**IMPORTANTE**: `Para ejecutar el proyecto en tu equipo`

## Tecnologías ocupadas

- React
- Redux
- Express
- Sequelize - Postgres
- NodeJS
- JavaScript
- HTML
- CSS

### **IMPORTANTE**: `Para ejecutar el proyecto en tu equipo`

```md
    1. Forkea el repositorio
    2. Clona el repositorio en tu local
    3. Instala las dependencias con: npm install en la carpeta api y client
    4. Crea los archivos .env para la carpeta api y client
    5. Ejecuta: npm start en la carpeta api y client
```

## Frontend

Se desarrollo una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

**Pagina inicial**:

- Una imagen de fondo representativa al proyecto
- Botón para ingresar al home (`Ruta principal`)

**Ruta principal**

- Input de búsqueda para encontrar pokemons por nombre
- Área donde se ve el listado de pokemons. Al iniciar se cargan los primeros resultados obtenidos desde la ruta `GET /pokemons` y muestra su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
- Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

**Ruta de detalle de Pokemon**

- Los campos mostrados en la ruta principal para cada pokemon

  - Imagen
  - Nombre
  - Tipos

- Número de Pokemon (id)
- Estadísticas
  - Vida
  - Ataque
  - Defensa
  - Velocidad
- Altura y peso

**Ruta de creación**

- Un formulario **controlado con JavaScript** con los campos mencionados en el detalle del Pokemon
- Posibilidad de seleccionar uno o dos tipo de Pokemon
- Botón/Opción para crear un nuevo Pokemon

## Base de datos

El modelo de la base de datos tiene las siguientes entidades

- Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon)
  - Nombre
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

## Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

- **GET /pokemons**:
  - Obtiene un listado de los pokemons desde pokeapi.
  - Devuelve solo los datos necesarios para la ruta principal
- **GET /pokemons/{idPokemon}**:
  - Obtiene el detalle de un pokemon en particular
  - Trae solo los datos de la ruta de detalle de pokemon
  - Funciona tanto para un id de un pokemon existente en pokeapi o uno creado
- **GET /pokemons?name="..."**:
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parametro
  - Cuando no existe ningún pokemon muestra un mensaje
- **POST /pokemons**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos.
- **GET /types**:
  - Obtiene todos los tipos de pokemons posibles
  - En una primera instancia trae desde pokeapi y los guarda en su propia base de datos y luego ya utilizarlos desde allí

## Autor

| [<img src="https://user-images.githubusercontent.com/15266097/186324804-11517757-4f94-4a12-a975-d21800dca11b.png" width=115><br><sub>Emmanuel Arenas</sub>](https://github.com/EmmanuelArenas) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Licencia 📄

Licencia: [MIT](License)

## Previsualización

<img width="80%" src="./client/src/assets/pre.gif">
