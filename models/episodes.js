const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    epTitle: {type: String, required: true},
    epSynopsis: String,
    epRating: {type: Number, min: 0, max: 5},
    epWatched: Boolean,
    epNotes: String,
    epImage: String,
    seriesId: String
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;