/* 
The allowed SchemaTypes are:
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
*/

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var artworkSchema = new Schema({
    name: String,
    artist: String,
    cost: Number,
    img_name: String,
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Artwork = mongoose.model('Artwork', artworkSchema);

// make this available to our users in our Node applications
module.exports = Artwork;
