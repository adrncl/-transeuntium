import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    noteId: Number,
    note: String,
    creationDate: {
        type: Date,
        default: new Date()
    },
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },
})

const goStationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    stationName: String,
    serviceType: String,
    lineName: String,
    services: [String],
    likeCount: Number,
    dislikeCount: Number,
    wifiStrength: {
        type: [Number],
        default: 0
    },
    safetyRating: {
        type: [Number],
        default: 0
    },
    sanitaryRating: {
        type: [Number],
        default: 0
    },
    notes: [noteSchema],
    hoursOfOperation: String,
    type: String,
    coordinates: Array,
})



const goStationsModel = mongoose.model("go-station-points", goStationsSchema)

export { goStationsModel, } 