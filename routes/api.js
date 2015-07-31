var express = require('express');
var Track = require('../models/tracks');
var router = express.Router();
var bodyParser = require('body-parser');

// just testing middleware applied to all routes

router.use(function(req, res, next){
  console.log('A request has been made somewhere..anywhere');

  // middleware has to be told to keep going or it won't
  // go to the next route.

  next();
});

// show all tracks on a get to /api

router.get('/', function(req, res){
  res.json({message: 'Welcome to the API, bro'});
});

router.route('/tracks').post(function(req, res){

    var track = new Track();
    track.title = req.body.title;
    track.createdOn = new Date();

    track.save(function(err){
      if(err){
        res.send(err);
      }

      res.json({ message: 'New Track added!'});

    });

  }).get(function(req, res){
    Track.find(function(err, tracks){
      if(err){
        res.send(err);
      }

      res.json(tracks);

    });t
  });

router.route('/tracks/:track_id').get(function(req, res){
    Track.findById(req.params.track_id, function(err, track){
      if(err){
        res.send(err);
      }

      res.json(track);

    });
  });

module.exports = router;
