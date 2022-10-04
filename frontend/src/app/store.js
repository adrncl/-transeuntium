import { configureStore } from '@reduxjs/toolkit'
import markerReducer from "../features/markers/markersSlice"
import markerFormReducer from "../features/markerForm/markerFormSlice"

export default configureStore({
    reducer: {
        markers: markerReducer,
        markerForm: markerFormReducer,
    },
})