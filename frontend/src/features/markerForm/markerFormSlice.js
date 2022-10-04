import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { endpoint, HTTP_STATUS } from "../../app/constants"

export const fetchSpecificGoStation = createAsyncThunk(
    'markerForm/fetchSpecificGoStation',
    async (updatedInfo, { rejectWithValue }) => {
        try {
            const { id } = updatedInfo;
            const { data, status } = await axios.get(`${endpoint}/gostations/${id}`)
            return data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response?.data);
        }
    }
)

export const updateGoStationInfo = createAsyncThunk(
    'markerForm/updateGoStationInfo',
    async (updatedInfo, { rejectWithValue }) => {
        try {
            const { id } = updatedInfo;
            const response = await axios.put(`${endpoint}/gostations/${id}`, updatedInfo)
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data);
        }
    }
);

const initialState = {
    markerData: [],
    fetchingStatus: null,
    updatingStatus: null,
    id: null,
    dislikeCount: null,
    likeCount: null,
    safetyRating: null,
    sanitaryRating: null,
    services: null,
    wifiStrength: null,
    notes: [],
}

const markerFormSlice = createSlice({
    name: "markerForm",
    initialState,
    reducers: {
        updateNote(state, action) {
            state.notes = action.payload
            console.log("The notes have been updated", state.notes)
        },
        updateDislikeCount(state, action) {
            state.dislikeCount = action.payload
            console.log("The dislikeCount has been updated", state.dislikeCount)
        },
        updateLikeCount(state, action) {
            state.likeCount = action.payload
            console.log("The likeCount has been updated", state.likeCount)
        },
        updateSafetyRating(state, action) {
            state.safetyRating = action.payload
            console.log("The safetyRating has been updated", state.safetyRating)
        },
        updateSanitaryRating(state, action) {
            state.sanitaryRating = action.payload
            console.log("The sanitaryRating has been updated", state.sanitaryRating)
        },
        updateServices(state, action) {
            state.services = action.payload
            console.log("The services has been updated", state.services)
        },
        updateWifiStrength(state, action) {
            state.wifiStrength = action.payload
            console.log("The wifiStrength has been updated", state.wifiStrength)
        },
        reset: () => initialState
    },
    extraReducers: {
        [fetchSpecificGoStation.pending]: (state, action) => {
            state.fetchingStatus = HTTP_STATUS.PENDING
        },
        [fetchSpecificGoStation.fulfilled]: (state, { payload }) => {
            state.markerData = payload
            state.id = payload._id
            state.dislikeCount = payload.dislikeCount
            state.likeCount = payload.likeCount
            state.safetyRating = payload.safetyRating
            state.sanitaryRating = payload.sanitaryRating
            state.services = payload.services
            state.wifiStrength = payload.wifiStrength
            state.notes = payload.notes
            state.fetchingStatus = HTTP_STATUS.FULFILLED
            console.log(
                "Current state",
                "\n MarkerData: ", state.markerData,
                "\n Id: ", state.id,
                "\n dislikeCount: ", state.dislikeCount,
                "\n likeCount: ", state.likeCount,
                "\n safetyRating: ", state.safetyRating,
                "\n sanitaryRating: ", state.sanitaryRating,
                "\n services: ", state.services,
                "\n wifiStrength: ", state.wifiStrength,
                "\n notes: ", state.notes,
                "\n status: ", state.fetchingStatus)
        },
        [fetchSpecificGoStation.rejected]: (state, action) => {
            state.fetchingStatus = HTTP_STATUS.REJECTED
        },
        [updateGoStationInfo.pending]: (state, action) => {
            state.updatingStatus = HTTP_STATUS.PENDING
        },
        [updateGoStationInfo.fulfilled]: (state, action) => {
            state.updatingStatus = HTTP_STATUS.FULFILLED
        },
        [updateGoStationInfo.rejected]: (state, action) => {
            console.log(state)
            state.updatingStatus = HTTP_STATUS.REJECTED
        },
    }
})

export const getSpecificGoStation = (state) => state.markerForm.markerData
export const getSpecificGoStationStatus = (state) => state.markerForm.fetchingStatus
export const getSpecificGoStationNotes = (state) => state.markerForm.notes

export const updateSpecificGoStation = (state) => state.markerForm.markerData
export const updateSpecificGoStationStatus = (state) => state.markerForm.updatingStatus

export const { updateNote, updateDislikeCount, updateLikeCount, updateSafetyRating, updateSanitaryRating, updateServices, updateWifiStrength, reset } = markerFormSlice.actions

export default markerFormSlice.reducer