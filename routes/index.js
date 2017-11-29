var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/filmDB', function(err, db) {
    if (err) {
        throw err;
    }
    hello = db.collection('filmDB').find({});
    if(!hello)
    {
      db.collection('filmDB');
    }
    router.get('/', function(req, res, next) {
      db.collection('filmDB').find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        }
        res.render('index', { title: 'Express', filmDB: result });
      });
    });

    router.post('/film', function(req, res, next) {
        db.collection('filmDB').findOne(
            {_id: ObjectId(req.body.movie)}, function(err, doc) {
                res.render('film', {title: doc.title, content: doc.content});
    })
  })

    router.get('/aj_film', function(req, res, next) {
      db.collection('filmDB').find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        }
        res.render('aj_film', { title: 'Ajoutey', filmDB: result });
      });
    });

    router.get('/sup_film', function(req, res, next) {
      db.collection('filmDB').find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        }
        res.render('sup_film', { title: 'Supprimey', filmDB: result });
      });
    });

    router.post('/update', function(req, res, next) {
        db.collection('filmDB').findOne({
            _id: ObjectId(req.body.movie)
        }, function(err, docs) {
            res.render('updaate', {film: docs});
        })
    })
    router.post('/update_action', function(req, res, next) {
        console.log(req.body);
        db.collection('filmDB').updateOne(
            {_id: ObjectId(req.body.film)},
            { $set: {
                title: req.body.title,
                content: req.body.content
            }}
        )
        res.redirect('/');
    })

});



/* GET home page. */


module.exports = router;
