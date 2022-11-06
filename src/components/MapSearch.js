import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

export default function MapSearch({ setNewBoxData }) {
    const map = useMap();

    const provider = new OpenStreetMapProvider();

    const search = new GeoSearchControl({
        provider,
        notFoundMessage: "Sorry, that address could not be found.",
        style: "bar",
    });

    const onShowLocation = (result) => {
        if (result) {
            const { x, y, label } = result.location;
            setNewBoxData((prevData) => {
                return {
                    ...prevData,
                    boxLocationX: x,
                    boxLocationY: y,
                    boxLocationCity: label.split(", ").at(0),
                };
            });
        }
    };

    useEffect(() => {
        map.addControl(search);

        map.on("geosearch/showlocation", onShowLocation);

        return () => {
            map.removeControl(search);

            map.off("geosearch/showlocation");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

// https://github.com/smeijer/leaflet-geosearch
