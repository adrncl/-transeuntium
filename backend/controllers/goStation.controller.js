// // getting access to our model
import mongoose from 'mongoose';
import { goStationsModel } from "../models/goStations.model.js"

export const getGoStations = async (req, res) => {
    try {
        const goStations = await goStationsModel.find();
        // status 200 means everythings okay
        res.status(200).json(goStations);
    } catch (error) {
        console.error("Error in the getGoStations controller: ", error.message);
        res.status(404).json({ message: error.message })
    }
};

export const getSpecificGoStation = async (req, res) => {
    try {
        const { id } = req.params;
        const goStationNotes = await goStationsModel.findById(id);
        res.status(200).json(goStationNotes);
    } catch (error) {
        console.error("Error in the getSpecificGoStation controller: ", error.message);
        res.status(404).json({ message: error.message })
    }
}

// update post controller
export const updateGoStationInfo = async (req, res) => {
    // extracting id from req.params
    const { id } = req.params;
    console.log(req.body)
    const updatedStationInfo = req.body;

    console.log(updatedStationInfo)

    // checking if the id is valid in the mongoose db, if it's not valid just return a status saying nothings returned
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    goStationsModel.findById(id, function (err, goStation) {
        if (goStation.length === 0) return res.json();

        const existingNotes = goStation.notes;
        const existingSanitaryRatings = goStation.sanitaryRating
        const existingSafetyRatings = goStation.safetyRating
        const existingServicesIncluded = goStation.services

        const NewNote = {
            noteId: existingNotes.length,
            note: updatedStationInfo.note,
        };

        goStation.likeCount = goStation.likeCount + (updatedStationInfo.stationLiked ? 1 : 0)
        goStation.dislikeCount = goStation.dislikeCount + (updatedStationInfo.stationDisliked ? 1 : 0)

        updatedStationInfo.servicesIncluded.forEach((element) => {
            existingServicesIncluded.indexOf(element) === -1 ? existingServicesIncluded.push(element) : null
        });

        if (updatedStationInfo.sanitaryRating) existingSanitaryRatings.push(updatedStationInfo.sanitaryRating)
        if (updatedStationInfo.safetyRating) existingSafetyRatings.push(updatedStationInfo.safetyRating)
        if (updatedStationInfo.note) existingNotes.push(NewNote);

        goStation.save(function (err) {
            if (err) {
                console.log("there was an err", err)
            }
            return res.json();
        })
    });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await goStationsModel.findById(id);
    const updatedPost = await goStationsModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)
}