const express = require('express');
const app = express();
const path = require('path');
const pokeData = require('./pokeData.json')

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/pokemon/:num', (req, res) => {
    const { num } = req.params
    const pokemon = pokeData[num - 1]
    const imageURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
    res.render('pokemon', { ...pokemon, imageURL })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})