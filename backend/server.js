const express = require('express')

const toyService = require('./services/toy-service.js')
const app = express()
const port = 3030

app.use(express.static('public'))
app.use(express.json())


// LIST
app.get('/api/toy', (req, res) => {
    toyService.query()
        .then((toys) => res.send(toys))
        .catch((err) => res.status(500).send('Cannot get toys'))
})

// CREATE 
app.post('/api/toy', (req, res) => {
    const toy = {
        name: req.body.name,
        price: +req.body.price,
        labels: req.body.labels,
        createdAt: req.body.createdAt,
        inStock: req.body.inStock,
    }
    toyService.save(toy)
        .then((savedToy) => res.send(savedToy))
        .catch((err) => res.status(500).send('Cannot save toy'))
})

// UPDATE
app.put('/api/toy/:toyId', (req, res) => {
    const toy = {
        _id: req.body._id,
        name: req.body.name,
        price: +req.body.price,
        labels: req.body.labels,
        createdAt: req.body.createdAt,
        inStock: req.body.inStock,
    }
    toyService.save(toy)
        .then((savedToy) => res.send(savedToy))
        .catch((err) => res.status(500).send('Cannot save toy'))
})


// READ 
app.get('/api/toy/:toyId', (req, res) => {
    const { toyId } = req.params
    toyService.getById(toyId)
        .then((toy) => res.send(toy))
        .catch((err) => res.status(500).send('Cannot get toy'))
})

// DELETE
app.delete('/api/toy/:toyId', (req, res) => {
    const { toyId } = req.params
    toyService.remove(toyId)
        .then(() => res.send('Removed'))
        .catch((err) => res.status(500).send('Cannot remove toy'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})