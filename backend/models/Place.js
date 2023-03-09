const mongoos = require("mongoose")

const PlaceSchema = new mongoos.Schema({
    owner:{type:mongoos.Schema.Types.ObjectId,ref:"User"},
    title: String,
    address:String,
    photos : [String],
    description : String,
    perks : [String],
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuests:Number,

});

const PlaceModel = mongoos.model("Place",PlaceSchema)


module.exports = PlaceModel