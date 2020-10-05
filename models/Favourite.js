const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const FavouriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    movieId : {
        type:String
    },
    movieTitle: {
        type:String
    },
    movieImage: {
        type: String
    },
    movieRunTime: {
        type: String 
    }
})

const Favourite = mongoose.model('Favourite', FavouriteSchema);

module.exports = Favourite;