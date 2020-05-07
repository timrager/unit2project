const express = require('express');
const router = express.Router();
const Series = require('../models/series.js');
const Episode = require('../models/episodes.js');


/////////////////////////
// EXPRESS CRUD ROUTES //
/////////////////////////
// Index (GET) -- shows list of all documents, liked to New, Edit and Delete
router.get('/', (req, res) => {
    Series.find( {}, (err, allSeries) => {
        res.render('Index', {
            allSeries: allSeries
        });
    });
});

// New (GET) -- form to create new document, linked to Create
router.get('/new', (req, res) => {
    res.render('New');
})
// New for a new Episode, pass in ObjectId of Series
router.get('/neweps/:id', (req, res) => {
    Series.findById( req.params.id, (err, thisSeries) => {
        res.render('NewEpisode', {
            thisSeries: thisSeries
        });
    });
});


// Create (POST) -- creates a new document from New form data for Series collection
router.post('/', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    Series.create(req.body, (err, createSeries) => {
        res.redirect('/anime')
    })
})
// Create for a new Episode
router.post('/neweps/:id', (req, res) => {
    if (req.body.epWatched === "on") {
        req.body.epWatched = true;
    } else {
        req.body.epWatched = false;
    }
    //set seriesId for Episode model
    req.body.seriesId = req.params.id;
    //create Episode along with seriesId
    Episode.create(req.body, (err, createEpisode) => {
        res.redirect('/anime')
    })
})

// Show (GET) -- shows an individual document 
router.get('/:id', (req, res) => {
    Series.findById(req.params.id, (err, foundSeries) => {
        Episode.find( {seriesId: foundSeries._id }, (err, episode) => {
            res.render('Show', {
                thisSeries: foundSeries,
                episode: episode
            });
        })
    });
});


// Delete (DELETE) -- deleted document from mongoDB
router.delete('/:id', (req, res) => {
    Series.findByIdAndRemove(req.params.id, (err, series) => {
        res.redirect('/anime')
    })
})
// delete for Episode
router.delete('/episode/:id', (req, res) => {
    Episode.findByIdAndRemove(req.params.id, (err, episode) => {
        res.redirect('/anime')
    })
})

// Edit (GET) -- form to update a document, liked to Update
router.get('/:id/edit', (req, res) => {
    Series.findById(req.params.id, (err, foundSeries) => {
        res.render('Edit', {
            thisSeries: foundSeries
        })
    })
})
// edit for Episode
router.get('/episode/:id/edit', (req, res) => {
    Episode.findById(req.params.id, (err, foundEpisode) => {
        res.render('EditEpisode', {
            thisEpisode: foundEpisode
        })
    })
})


// Update (PUT) -- update a resource (PUT)
router.put('/:id', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    Series.findByIdAndUpdate(req.params.id, req.body, (err, updatedSeries) => {
        res.redirect('/anime');
    });
});
// update for Episode
router.put('/episode/:id', (req, res) => {
    if (req.body.epWatched === "on") {
        req.body.epWatched = true;
    } else {
        req.body.epWatched = false;
    }
    Episode.findByIdAndUpdate(req.params.id, req.body, (err, updatedEpisode) => {
        res.redirect('/anime');
    });
});



module.exports = router;