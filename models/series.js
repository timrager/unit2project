const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
    title: { type: String, required: true },
    synopsis: String,
    numOfEpisodes: Number,
    season: String,
    rating: {type: Number, min: 0, max: 5},
    watched: Boolean,
    notes: String,
    image: String,
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;