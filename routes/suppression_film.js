var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/filmDB', function(err, db) {

    router.post('/suppr', function(req,res,next) {
        db.collection('filmDB').deleteOne({"_id": ObjectId(req.body.movie)});
        res.redirect('/');
    });

});


/* GET home page. */

module.exports = router;
