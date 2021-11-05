const input = document.querySelector('input')
const boton = document.querySelector('button')
const pokemonContainer =  document.querySelector('.pokemon-container');




boton.addEventListener('click' , (e) =>{
    e.preventDefault();
    TraerPokemon(input.value)
    
    

})

function TraerPokemon(pokemon){
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response =>response.json())
    .then( (data) => {
        crearPokemon(data);
    })
}

TraerPokemon();

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    const h3 = document.createElement('h3')
    h3.textContent = pokemon.name;

    const div = document.createElement('div')
    div.appendChild(img)
    div.appendChild(h3)

    pokemonContainer.appendChild(div)
}

