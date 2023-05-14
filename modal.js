// const myModal = document.getElementById('exampleModal')


// myModal.addEventListener('shown.bs.modal', (event) => {
//     let pokemon = event.relatedTarget
//     let pokeName = pokemon.firstChild.innerHTML

//     let name = document.getElementsByClassName('modalName')
//     name[0].innerHTML = pokeName

// })


const myModal = document.querySelector('#exampleModal');

myModal.addEventListener('shown.bs.modal', (event) => {
    const name = document.querySelector('.modalName');
    console.log(name)
    const pokemon = event.relatedTarget;
    const pokeName = pokemon.firstChild.innerHTML;

    name.innerHTML = pokeName;
    name.classList.remove('hidden'); // remove "hidden" class when modal is shown
}); 