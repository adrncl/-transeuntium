import React from "react";

import { LayerGroup } from "react-leaflet";

import LoadBarrieLine from "./barrieLine/BarrieLine";
import LoadKitchenerLine from "./kitchenerLine/KitchenerLine";
import LoadLakeshoreEastLine from "./lakeshoreEastLine/LakeshoreEastLine";
import LoadLakeshoreWestLine from "./lakeshoreWestLine/LakeshoreWestLine";
import LoadMiltonLine from "./miltonLine/MiltonLine";
import LoadRichmondHillLine from "./richmondHillLine/RichmondHillLine";
import LoadStouffvilleLine from "./stouffvilleLine/StouffvilleLine";
import LoadUnionPearsonLine from "./unionPearsonLine/UnionPearsonLine";

const LoadGoLines = () => {
    return (
        <LayerGroup>
            <LoadBarrieLine />
            <LoadKitchenerLine />
            <LoadLakeshoreEastLine />
            <LoadLakeshoreWestLine />
            <LoadMiltonLine />
            <LoadRichmondHillLine />
            <LoadStouffvilleLine />
            <LoadUnionPearsonLine />
        </LayerGroup>
    );
};

export default LoadGoLines;
