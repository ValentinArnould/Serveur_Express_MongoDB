var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/filmDB', function(err, db) {
    if (err) {
        throw err;
    }

});


/* GET home page. */

module.exports = router;
