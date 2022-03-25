const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be present"]
    },
    image: {
        type: String,
        required: [true, "Image must be present"]
    },
    treasure: {
        type: Number,
        required: [true, "Number of Treasures must be present"]
    },
    catchphrase: {
        type: String,
        required: [true, "Catchphrase must be present"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew Position must be present"]
    },
    pegLeg:{
        type:String,
    },
    hookHand:{
        type:String,
    },
    eyePatch:{
        type:String
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema)