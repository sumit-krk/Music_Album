const mongoose = require("mongoose")

const artistSchema = new mongoose.Schema({
    name:{type:mongoose.Schema.Types.ObjectId, ref:'album', required:true},
    Occupation: {type:String, required: true},
    dateofbirth:{type:String, required: true}
})

const Artists = mongoose.model("artist",artistSchema)

module.exports = Artists