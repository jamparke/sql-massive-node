const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const products_controller = require('./products_controller');
let app = module.exports = express();


app.use(cors());
app.use(bodyParser.json());

massive(config.massiveConfig).then(db => {
    app.set('db', db)
})

app.get('/api/products', products_controller.getAll); //working
app.get('/api/product/:id', products_controller.getOne); //working
app.put('/api/product/:id', products_controller.update); //working
app.post('/api/products', products_controller.create); //working
app.delete('/api/product/:id', products_controller.delete); //working

app.listen(3000, () => console.log("Listening to port 3000"));