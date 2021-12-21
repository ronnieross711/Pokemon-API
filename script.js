const textInput = document.querySelector('#inputBar')
const button = document.querySelector('#searchButton')
const pokemonHeading = document.querySelector('#my-pokemon-heading')
const frontPicture = document.querySelector('#pic1')
const pokemonName = document.querySelector('#name')
const pokemonType = document.querySelector('#type')
const pokemonAbl = document.querySelector('#abilities')
const pokemonMoves = document.querySelector('#moves')

async function getData(e) {
    const url = `https://pokeapi.co/api/v2/pokemon/${textInput.value}`
    e.preventDefault()

    fetch(url)
        .then(res => res.json())
        .then(res => {
            pokemonHeading.innerHTML = res.name.toUpperCase()
            frontPicture.setAttribute('src', res.sprites.other['official-artwork'].front_default)
            pokemonName.innerHTML = res.name
            pokemonType.innerHTML = res.types[0].type.name
            pokemonAbl.innerHTML = res.abilities[0].ability.name
            pokemonMoves.innerHTML = res.moves[0].move.name

        })

        .catch(err => console.log("something went wrong", err))
}

button.addEventListener('click', getData)