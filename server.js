const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const { Client } = require('pg');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

// Mysql library 
// const mysql = require('mysql');

// Get params from frontend request
var bodyParser = require('body-parser');


// Connect to Postgres database
var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
const client = new Client({
    connectionString: connectionString
});
client.connect();

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('common'));

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// Get product list
app.get('/api/products', function (req, res, next) {
    client.query('SELECT * FROM products', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result.rows);
        
    });
});
// Get 1 product 
app.get('/api/products/:id', function (req, res, next) {
    client.query('SELECT * FROM products where id = ' + req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result.rows[0]);
    });
});
// Get image list of profuct
app.get('/api/product_images/:id', function (req, res, next) {
    client.query('SELECT * FROM product_images where product_id = ' + req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.json(result.rows);
    });
});

// Create new product
app.use(bodyParser.json())
app.post('/api/products', function (req, res) {
    var { id, product_name, product_price, product_image, product_review, product_bought } = req.body;
    var query = 'INSERT INTO products(id, product_name, product_price, product_image, product_review, product_bought) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *'
    var values = [id, product_name, product_price, product_image, product_review, product_bought];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
})

// Test GET data
app.get('/api/test', (req, res) => {
    res.json({ message: 'Dữ liệu được cập nhật từ PostgreSQL!' });
})


const server = createServer(app);

server.listen(PORT, err => {
    if (err) throw err;

    console.log('Server started!');
})


