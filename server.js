///////////////////////////////////
// SET UP EXPRESS - DEPENDENCIES //
///////////////////////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;


////////////////
// MIDDLEWARE //
////////////////
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
app.use(methodOverride('_method'));

////////////////////
// MONGOOSE SETUP //
////////////////////
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/anime';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// mongoose.connect('mongodb://localhost:27017/anime', { useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.once('open', () => {
//     console.log('Connected to your MondoDB....');
// });

////////////////
// CONTROLLER //
////////////////
const animeController = require('./controllers/anime.js');
app.use('/anime', animeController)

//Seeder
// app.get('/seed', async( req, res ) => {
//     const newSeries =
//     [
//         {
//             title: 'Attack on Titan',
//             synopsis: 'Eren Yeager lives with Mikasa Ackerman and best friend Armin Arlert in the town of Shiganshina adjacent to Wall Maria, outermost of three circular walls protecting humanity from man-eating Titans said to have killed all other humans one hundred years prior.',
//             numOfEpisodes: 13,
//             season: 'Fall 2013',
//             rating: 5,
//             watched: true,
//             notes: 'Attack on Titan (進撃の巨人, Shingeki no Kyojin) is a Japanese fantasy anime television series adapted from the manga of the same name by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason. The story follows the adventures of Eren Yeager, his friends Mikasa Ackerman, Armin Arlert, whose lives are changed forever after a Colossal Titan breaches the wall of their home town. Vowing revenge and to reclaim the world from the Titans, Eren and his friends join the Scout Regiment,[6] an elite group of soldiers who fight Titans.',
//             image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg'

//         }
//     ]

//     try {
//         const seedItems = await Series.create(newSeries)
//         console.log(seedItems)

//         res.send(seedItems)
//         console.log(seedItems)
        
//     } catch (err){
//         res.send(err.message)
//     }
// })

//////////////////////
// EXPRESS LISTENER //
//////////////////////
app.listen(PORT, () => {
    console.log('Express listening...');
});