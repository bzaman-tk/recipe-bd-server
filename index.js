const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const chefs = require('./data/chefs.json')
const recipe = require('./data/recipe.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Server Is Working Fine</h1>')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})
app.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const results = recipe.filter(r => {
        //return console.log(r.chef_id, id)
        return r.chef_id.includes(id)
    }
    )
    res.send(results)
})

app.listen(port, () => console.log('My port is: ', port))