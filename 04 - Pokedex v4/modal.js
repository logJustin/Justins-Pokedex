const myModal = document.getElementById('exampleModal')
let name = document.getElementsByClassName('modal pokemonName')
name = name[0].innerHTML
console.log(name)


myModal.addEventListener('shown.bs.modal', (event) => {
    let pokemon = event.relatedTarget
    let pokeName = pokemon.firstChild.innerHTML
    name = pokeName
    console.log(pokemon.firstChild.innerHTML)

})
