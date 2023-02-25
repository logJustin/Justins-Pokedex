// https://github.com/Tatohead/Console-Iconset/tree/main/Console

function generatePokemon(x) {
    x = x - 1
    fetch('./pokeData.json')
        .then(res => res.json())
        .then(pokeData => {
            //add name, id, photo, sprites, abilities, evolves into list, and games/consoles it appeared in 
            document.getElementById('pokemonName').innerHTML = pokeData[x].species
            document.getElementById('pokeHeight').innerHTML = pokeData[x].height
            document.getElementById('pokeWeight').innerHTML = pokeData[x].weight
            document.getElementById('genderBoy').innerHTML = (pokeData[x]["percent-male"] * 100) + ('%')
            document.getElementById('genderGirl').innerHTML = (pokeData[x]["percent-female"] * 100) + ('%')
            document.getElementById('pokeTypeOne').innerHTML = pokeData[x].type1
            document.getElementById('pokeTypeOne').className = ('pill background-color-'.concat(pokeData[x].type1).toLowerCase())

            // if second type exists
            if (pokeData[x].type2) {
                var typeTwo = document.createElement('span')
                typeTwo.innerHTML = pokeData[x].type2
                typeTwo.setAttribute('class', ('pill background-color-'.concat(pokeData[x].type2).toLowerCase()))
                document.getElementById('pokeTypes').appendChild(typeTwo)
            }
            // retrieve element for pokemon Number & Image
            var pokemonNumber = document.getElementById('pokeNumber')
            var pokemonImage = document.getElementById('pokemonImage')
            // logic to make sure there are the right amount of zeros for the image url & ID
            switch (true) {
                case (pokeData[x].id < 10):
                    pokemonNumber.innerHTML = String('00').concat(pokeData[x].id);
                    pokemonImage.setAttribute('src', `https://www.serebii.net/pokemon/art/00${x + 1}.png`)
                    break;
                case ((pokeData[x].id >= 10) && (pokeData[x].id <= 99)):
                    pokemonNumber.innerHTML = String('0').concat(pokeData[x].id);
                    pokemonImage.setAttribute('src', `https://www.serebii.net/pokemon/art/0${x + 1}.png`)
                    break;
                case (pokeData[x].id >= 100):
                    pokemonNumber.innerHTML = pokeData[x].id
                    pokemonImage.setAttribute('src', `https://www.serebii.net/pokemon/art/${x + 1}.png`)
                    break;
            }

        })
}

function generateEvolution() {
    fetch('./pokeEvolutions.json')
        .then(res => res.json())
        .then(pokeData => {
            let pokeName = document.getElementById('pokemonName').innerHTML
            let pokeNumber = document.getElementById('pokeNumber').innerHTML
            // Find the evolutionChain that the pokemon is in
            for (evolutionChains = 0; evolutionChains <= pokeData.length; evolutionChains++) {
                // If they are the baby pokemon of the chain, then add second & third pokemon if they exist
                switch (pokeName) {
                    case (pokeData[evolutionChains].babyPokémon):
                        // add if second and third
                        document.getElementById("pokeEvolutionImage").setAttribute('src', `https://www.serebii.net/pokemon/art/${pokeNumber}.png`)
                        switch (true) {
                            case (pokeNumber < 8):
                                var secondPoke = String('00').concat(parseInt(pokeNumber) + 1)
                                var thirdPoke = String('00').concat(parseInt(pokeNumber) + 2)
                                break;
                            case (pokeNumber < 99):
                                var secondPoke = String('0').concat(parseInt(pokeNumber) + 1)
                                var thirdPoke = String('0').concat(parseInt(pokeNumber) + 2)
                                break;
                            case (pokeNumber >= 99):
                                var secondPoke = String('').concat(parseInt(pokeNumber) + 1)
                                var thirdPoke = String('').concat(parseInt(pokeNumber) + 2)
                                break;
                        }
                        if (pokeData[evolutionChains].firstEvolvedPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${secondPoke}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        } if (pokeData[evolutionChains].secondEvolvedPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${thirdPoke}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        }
                        break;
                    // If they are the second pokemon of the chain, then add baby & third pokemon if they exist
                    case (pokeData[evolutionChains].firstEvolvedPokémon):
                        switch (true) {
                            case (pokeNumber <= 8):
                                var firstPoke = String('00').concat(parseInt(pokeNumber) - 1)
                                var thirdPoke = String('00').concat(parseInt(pokeNumber) + 1)
                                break;
                            case (pokeNumber < 99):
                                var firstPoke = String('0').concat(parseInt(pokeNumber) - 1)
                                var thirdPoke = String('0').concat(parseInt(pokeNumber) + 1)
                                break;
                            case (pokeNumber == 99):
                                var firstPoke = String('0').concat(parseInt(pokeNumber) - 1)
                                var thirdPoke = String('').concat(parseInt(pokeNumber) + 1)
                                break;
                            case (pokeNumber > 99):
                                var firstPoke = String('').concat(parseInt(pokeNumber) - 1)
                                var thirdPoke = String('').concat(parseInt(pokeNumber) + 1)
                                break;
                        }
                        // add first & if third
                        document.getElementById("pokeEvolutionImage").setAttribute('src', `https://www.serebii.net/pokemon/art/${firstPoke}.png`)
                        if (pokeData[evolutionChains].firstEvolvedPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${pokeNumber}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        } if (pokeData[evolutionChains].secondEvolvedPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${thirdPoke}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        }
                        break;
                    // If they are the third pokemon of the chain, then add first & second pokemon if they exist
                    case (pokeData[evolutionChains].secondEvolvedPokémon):
                        switch (true) {
                            case (pokeNumber <= 10):
                                var firstPoke = String('00').concat(parseInt(pokeNumber) - 2)
                                var secondPoke = String('00').concat(parseInt(pokeNumber) - 1)
                                break;
                            case (pokeNumber <= 100):
                                var firstPoke = String('0').concat(parseInt(pokeNumber) - 2)
                                var secondPoke = String('0').concat(parseInt(pokeNumber) - 1)
                                break;
                            case (pokeNumber == 101):
                                var firstPoke = String('0').concat(parseInt(pokeNumber) - 2)
                                var secondPoke = String('').concat(parseInt(pokeNumber) - 1)
                                break;
                            case (pokeNumber > 102):
                                var firstPoke = String('').concat(parseInt(pokeNumber) - 2)
                                var secondPoke = String('').concat(parseInt(pokeNumber) - 1)
                                break;
                        }
                        // add first and second
                        document.getElementById("pokeEvolutionImage").setAttribute('src', `https://www.serebii.net/pokemon/art/${firstPoke}.png`)
                        if (pokeData[evolutionChains].babyPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${secondPoke}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        } if (pokeData[evolutionChains].secondEvolvedPokémon) {
                            let evoImgTwo = document.createElement('img')
                            evoImgTwo.setAttribute('src', `https://www.serebii.net/pokemon/art/${pokeNumber}.png`)
                            evoImgTwo.setAttribute('id', `pokeEvolutionImage`)
                            document.getElementById('RowTwoColumnOne').appendChild(evoImgTwo)
                        }
                        break;
                }
            }
        })
}