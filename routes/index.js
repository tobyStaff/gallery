var express = require('express');
var router = express.Router();
var Artwork = require('../models/artwork');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artworks', function(req, res, next) {
	var newArtwork = Artwork({
        name: 'boat on a river',
	    artist: 'Toby Stafford',
	    cost: 300,
	    img_name: 'boat_on_a_river.jpg',
    });

    // save the user
    newArtwork.save(function(err) {
        if (err) throw err;

        console.log('Artwork created!');
    });

    Artwork.find({}, function( err, artwork ) {
        console.log(artwork);
        res.render( 'artwork', { artwork: artwork } );
    });
	

});

module.exports = router;
