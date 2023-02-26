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
    res.render('pokemon', { ...pokemon })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})