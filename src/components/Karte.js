import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import MapSearch from "./MapSearch";

function Karte({ currentUserBoxes }) {
    // WBS CAMPUS
    const latitude = 52.45727522348639;
    const longitude = 13.540082992085056;
    const [allBoxes, setAllBoxes] = useState([]);

    const getAllBoxes = async () => {
        const response = await fetch(
            "https://morning-shelf-75082.herokuapp.com/box/findallboxes",
        );
        const data = await response.json();
        if (data) {
            const boxes = [];

            // eslint-disable-next-line no-restricted-syntax
            for (const user of data) {
                boxes.push(...user.userBoxes);
            }

            setAllBoxes(boxes);
            console.log(boxes);
        }
    };

    useEffect(() => {
        getAllBoxes();
    }, []);

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {allBoxes?.length >= 1 &&
                allBoxes.map((box) => (
                    // eslint-disable-next-line react/jsx-key
                    <Marker
                        position={[box.y, box.x]}
                        icon={
                            new Icon({
                                iconUrl: markerIconPng,
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                            })
                        }
                    >
                        <Popup position={[box.y, box.x]}>
                            <div>
                                <h1>Location: {box.boxLocationCity}</h1>
                                <h4>See what is inside:</h4>
                                <img
                                    src={`https://morning-shelf-75082.herokuapp.com/images/${box.boxImagePath}`}
                                    alt="boximage"
                                />
                            </div>
                        </Popup>
                    </Marker>
                ))}

            {currentUserBoxes?.map((item, i) => (
                <Marker
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${item.x}/${item.y}-${i}`}
                    position={[item.y, item.x]}
                    icon={
                        new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                        })
                    }
                >
                    <div className="Popup">
                        <Popup position={[item.y, item.x]}>
                            <div>
                                <h1>Location: {item.boxLocationCity}</h1>
                                <h4>See what is inside:</h4>
                                <img
                                    src={`https://morning-shelf-75082.herokuapp.com/images/${item.boxImagePath}`}
                                    alt="boximage"
                                />
                            </div>
                        </Popup>
                    </div>
                </Marker>
            ))}

            <MapSearch />
        </MapContainer>
    );
}
export default Karte;
