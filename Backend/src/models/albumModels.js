const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    albumName: {type:String, required: true},
    artistName: {type:String, required: true},
    coverImage: {type:String, required: true},
    genre:{type:String, required: true},
    year:{type:Number, required: true},
    songs: [{name: {type:String, required: true}, duration:{type:Number, required: true}}]
})

const Albums = mongoose.model("album",albumSchema)

module.exports = Albums