const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

var db

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})

MongoClient.connect('mongodb://root:Super123@ds255262.mlab.com:55262/saiquotes', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('saiquotes') // whatever your database name is
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})