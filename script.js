const textInput = document.querySelector('#inputBar')
const button = document.querySelector('#searchButton')
const pokemonHeading = document.querySelector('#my-pokemon-heading')
const frontPicture = document.querySelector('#pic1')
const pokemonName = document.querySelector('#name')
const pokemonType = document.querySelector('#type')
const pokemonAbl = document.querySelector('#abilities')
const pokemonMoves = document.querySelector('#moves')

// Playing with cod to make enter work and not always having to click the button
// document.querySelector('#inputBar').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });


async function getData(e) {
    const url = `https://pokeapi.co/api/v2/pokemon/${textInput.value}`
    e.preventDefault()

    fetch(url)
        .then(res => res.json())
        .then(res => {
            pokemonHeading.innerHTML = res.name.toUpperCase()
            frontPicture.setAttribute('src', res.sprites.other['official-artwork'].front_default)
            pokemonName.innerHTML = ` Name: ${res.name.toUpperCase()}`
            pokemonType.innerHTML = `Type: ${res.types[0].type.name.toUpperCase()}`
            pokemonAbl.innerHTML = `Ability: ${res.abilities[0].ability.name.toUpperCase()}`
            pokemonMoves.innerHTML = `Move: ${res.moves[0].move.name.toUpperCase()}`

        })

        .catch(err => console.log("something went wrong", err))
}

button.addEventListener('click', getData)

// // Playing with cod to make enter work and not always having to click the button
// textInput.addEventListener('keyup', function(e) {
//     if (e.keyCode === 13) {
//         e.preventDefault()
//     }
// })