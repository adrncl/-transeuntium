import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { endpoint, HTTP_STATUS } from "../../app/constants"

export const fetchGoStations = createAsyncThunk(
    'markers/fetchGoStations',
    async () => {
        const { data, status } = await axios.get(`${endpoint}/gostations`)
        if (status === 200) return data;
        console.log("error")
    }
)

const goStationMarkersSlice = createSlice({
    name: 'markers',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [fetchGoStations.pending]: (state, action) => {
            state.status = HTTP_STATUS.PENDING
        },
        [fetchGoStations.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [fetchGoStations.rejected]: (state, action) => {
            state.status = HTTP_STATUS.REJECTED
        }
    },
})

export const getAllGoStations = (state) => state.markers.list
export const getAllGoStationsStatus = (state) => state.markers.status

export default goStationMarkersSlice.reducer