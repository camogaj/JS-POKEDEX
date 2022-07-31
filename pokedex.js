// En nuestro archivo JavaScript tendremos que seguir el siguiente flujo de funciones:

// - Recuperar la lista con el id "podekex" y almacenarla en una variable.
// - Ejecutar el fetch mediante una función recuperando los 150 primeros Pokemon a través de un bucle for e indicar el endpoint correcto de la API.
// En este caso los vamos a recuperar de la siguiente url: `https://pokeapi.co/api/v2/pokemon/`
// - Hay que tener en cuenta que hay que especificarle a la url el valor que va a recuperar el bucle en cada iteración, 
// ya que la información de cada Pokémon se almacenará en una url como estas:
// Una vez recuperada la información tendremos que mapearla para imprimir los diferentes parámetros de los que compone. 
// Para ello crearemos la constante pokemon dentro de la misma función en la que almacenaremos en diferentes valores la información recogida:
// En este caso hemos almacenado el nombre, la imagen, el tipo y el id (número). 
// Si investigáis la API se pueden recuperar muchísima más información como los stats, los videojuegos en los que aparecen o diferentes generaciones de imágenes y displays.

// - Una vez desglosada la información habrá que pintarla a través de otra función que nos recupere el resultado del `fetch` 
// y nos pinte dentro de nuestro elemento `pokedex` una lista con dichos elementos. 
// Esta función deberá ser ejecutada una vez termine la función del fetch (recordemos el flujo de funciones).
// - Por último tenemos que llamar a la función fetch para que se ejecute al arrancar la aplicación y así nos recuperará la información 
// y nos pintará nuestro listado.

// Tened muy en cuenta la estructura del proyecto a la hora de llamar archivos para que todo funciones correctamente. 

// Aquí tenéis una guía de estilos para darle una mejor apariencia a la aplicación, pero recomendamos que le deis 
// vuestro propio estilo para tener una Pokédex más personalizada.


const lista = document.getElementById("pokedex");

fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(res => {
        let pokemons = res.results;
        pokemons.sort()
        for (let index = 0; index < pokemons.length; index++) {
            const element = pokemons[index];
              getPokemonByUrl(element.url)
          
        }
    })

function getPokemonByUrl(url) {
    fetch(url).then(res => res.json())
        .then(res => {
            const pokemon = {
                name: res.name,
                image: res.sprites.front_default,
                type: res.types.map((type) => type.type.name).join(', '),
                id: res.id
            }
            lista.innerHTML += `
            <div class="card">
            <div class="card-header">
                <h2>#${pokemon.id}</h2>
                <img src="${pokemon.image}" alt="rover" />
                <h2>${pokemon.name.toUpperCase()}</h2>
                <span class="tag tag-teal">${pokemon.type}</span>
         
        </div>`;
        })
}

