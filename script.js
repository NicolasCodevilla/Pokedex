const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const btnprev = document.querySelector('.btn-prev');
const btnnext = document.querySelector('.btn-next');

let searchPokemon = 1;

const form = document.querySelector('.form');

const fetchPokemon = async (pokemon) => {
  
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


        if (APIResponse.status == 200){
            const data = await APIResponse.json();
            return data;
        }  
  
}
    const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading ...';

     const data = await fetchPokemon(pokemon);
     
     if (data){
     pokemonName.innerHTML = data.name;
     pokemonNumber.innerHTML = data.id;
     pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

     input.value = '';
    }

    else{
        pokemonName.innerHTML = 'Not found :c';
        pokemonNumber.innerHTML = '';
        pokemonImage.src = '';
    }
    }

    form.addEventListener('submit', (event) => {
    const input = document.querySelector('.input_search');
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
   

    });

    const next = () => {
        const a = 1
        const b = +pokemonNumber.innerHTML
        renderPokemon(a+b)
    } 

    const prev = () => {
        const a = 1
        const b = +pokemonNumber.innerHTML
        renderPokemon(b-a)
    } 

    btnprev.addEventListener('click', (event) => {
        prev()
     });
    btnnext.addEventListener('click', (event) => {
        next()
      });
    renderPokemon(searchPokemon);
    
