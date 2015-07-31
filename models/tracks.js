var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrackSchema = new Schema({
    "title": String,
    "createdOn": Date
    // "services": [{ 
    //   "name": String, 
    //   "status": String, 
    //   "url": String 
    // }]
});

module.exports = mongoose.model('Track', TrackSchema);
