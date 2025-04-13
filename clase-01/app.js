const express = require('express');
const { pokemons } = require('./utils/utils')
const app = express();


app.get('/poke', async (req, res) => {
    res.send(await pokemons()) 
})

const PORT = 9091;

app.listen(PORT, () => {
    console.log(`ready on port ${PORT}`)
});