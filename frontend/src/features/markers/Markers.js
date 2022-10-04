import React, { useEffect } from 'react'
import { Marker } from "react-leaflet"
import LoadPopups from "../../components/Popups";
import { useDispatch, useSelector } from 'react-redux'
import { fetchGoStations, getAllGoStations, getAllGoStationsStatus } from './markersSlice'
import { reset, fetchSpecificGoStation } from "../markerForm/markerFormSlice"
import { HTTP_STATUS } from "../../app/constants"

const LoadMarkers = () => {
    const dispatch = useDispatch();
    const goStations = useSelector(getAllGoStations)
    const goStationsStatus = useSelector(getAllGoStationsStatus)

    // run only when dispatch changes - dependency
    useEffect(() => {
        dispatch(fetchGoStations())
    }, [dispatch])

    console.log(goStations, goStationsStatus)

    return (
        <>
            {
                goStationsStatus !== HTTP_STATUS.FULFILLED ?
                    null :
                    goStations.map((station, i) =>
                        <Marker
                            key={station._id}
                            position={[
                                station.coordinates[1],
                                station.coordinates[0]
                            ]}
                            eventHandlers={{
                                click: () => {
                                    dispatch(fetchSpecificGoStation({ id: station._id }))
                                }
                            }}

                        >
                            <LoadPopups station={station} />
                        </Marker>
                    )
            }
        </>
    )
}

export default LoadMarkers;
