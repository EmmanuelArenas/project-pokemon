# Project - Pokemon

<img height="60" src="https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png"/>

<img height="150" src="./pokemon.png" />

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

## .env

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible.

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

- Buscar pokemons
- Filtrarlos / Ordenarlos
- Crear nuevos pokemons

**IMPORTANTE**: Para las funcionalidades de filtrado y ordenamiento NO se ocuparon los endpoints de la API externa.Alguno de los ordenamientos y filtrados se realizarón desde el frontend.

### Endpoints/Flags utilizados

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/pokemon/{name}>
- GET <https://pokeapi.co/api/v2/type>

**IMPORTANTE**: Se utilizo CSS puro

#### Tecnologías ocupadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] NodeJS
- [ ] JavaScript
- [ ] HTML
- [ ] CSS

## Frontend

Se desarrollo una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

**Pagina inicial**:

- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**

- [ ] Input de búsqueda para encontrar pokemons por nombre
- [ ] Área donde se ve el listado de pokemons. Al iniciar se cargan los primeros resultados obtenidos desde la ruta `GET /pokemons` y muestra su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

**Ruta de detalle de Pokemon**

- [ ] Los campos mostrados en la ruta principal para cada pokemon

  - Imagen
  - Nombre
  - Tipos

- [ ] Número de Pokemon (id)
- [ ] Estadísticas
  - Vida
  - Ataque
  - Defensa
  - Velocidad
- [ ] Altura y peso

**Ruta de creación**

- [ ] Un formulario **controlado con JavaScript** con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar uno o dos tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon

## Base de datos

El modelo de la base de datos tiene las siguientes entidades

- [ ] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon)
  - Nombre
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

## Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

- [ ] **GET /pokemons**:
  - Obtiene un listado de los pokemons desde pokeapi.
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] **GET /pokemons/{idPokemon}**:
  - Obtiene el detalle de un pokemon en particular
  - Trae solo los datos de la ruta de detalle de pokemon
  - Funciona tanto para un id de un pokemon existente en pokeapi o uno creado
- [ ] **GET /pokemons?name="..."**:
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parametro
  - Cuando no existe ningún pokemon muestra un mensaje
- [ ] **POST /pokemons**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos.
- [ ] **GET /types**:
  - Obtiene todos los tipos de pokemons posibles
  - En una primera instancia trae desde pokeapi y los guarda en su propia base de datos y luego ya utilizarlos desde allí
