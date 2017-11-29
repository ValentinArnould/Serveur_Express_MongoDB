var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/filmDB', function(err, db) {

    router.post('/ajout', function(req,res,next) {
        db.collection('filmDB').insertOne({
            "title": req.body.title, "content": req.body.content
        });
        res.redirect('/');
    });

});


/* GET home page. */

module.exports = router;
