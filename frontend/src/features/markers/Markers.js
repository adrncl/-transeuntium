import React, { useEffect } from "react";
import { Marker, FeatureGroup, LayerGroup } from "react-leaflet";
import LoadPopups from "../../components/Popups";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import {
    fetchGoStations,
    getAllGoStations,
    getAllGoStationsStatus,
} from "./markersSlice";
import { reset, fetchSpecificGoStation } from "../markerForm/markerFormSlice";
import {
    HTTP_STATUS,
    goStationsColours,
    amtrakStationColours,
    viaRailStationColours,
    TTCColours,
} from "../../app/constants";

const LoadMarkers = ({ type }) => {
    const dispatch = useDispatch();
    const goStations = useSelector(getAllGoStations);
    const goStationsStatus = useSelector(getAllGoStationsStatus);

    const getMarkerColour = (type) => {
        let colour = "blue";
        if (type === "GO") colour = goStationsColours;
        if (type === "VIA") colour = viaRailStationColours;
        if (type === "Amtrak") colour = amtrakStationColours;
        if (type === "TTC") colour = TTCColours;
        return colour;
    };

    const markerColour = getMarkerColour(type);

    // run only when dispatch changes - dependency
    useEffect(() => {
        dispatch(fetchGoStations());
    }, [dispatch]);

    console.log("type, ", type, markerColour);
    console.log("GoStations, ", goStations, goStationsStatus);

    return (
        <LayerGroup>
            {goStationsStatus !== HTTP_STATUS.FULFILLED
                ? null
                : goStations.map((station, i) =>
                      station.serviceType.indexOf(type) > -1 ? (
                          <Marker
                              key={station._id}
                              position={[
                                  station.coordinates[1],
                                  station.coordinates[0],
                              ]}
                              color={"red"}
                              eventHandlers={{
                                  click: () => {
                                      dispatch(
                                          fetchSpecificGoStation({
                                              id: station._id,
                                          })
                                      );
                                  },
                              }}
                          >
                              <LoadPopups station={station} />
                          </Marker>
                      ) : null
                  )}
        </LayerGroup>
    );
};

export default LoadMarkers;
