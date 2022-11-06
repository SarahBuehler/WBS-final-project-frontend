import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import MapSearch from "../MapSearch";

const AddNewBox = ({ addNewBox, handleAddNewBoxClose, currentUser }) => {
    const [newBoxData, setNewBoxData] = useState({
        boxLocationCity: "",
        boxLocationX: "",
        boxLocationY: "",
    });

    const fetchLocationName = async () => {
        const getGeoCoding = await fetch(
            `https://www.mapquestapi.com/geocoding/v1/reverse?key=84Ti4q3j98a23NClVhIySWUTgYAivWm7&location=${newBoxData.boxLocationY}%2C${newBoxData.boxLocationX}&outFormat=json&thumbMaps=false`,
        );
        const json = await getGeoCoding.json();
        console.log(json);
        if (json.results) {
            setNewBoxData((prev) => {
                return {
                    ...prev,
                    boxLocationCity: json.results.at(0).locations.at(0)
                        .adminArea5,
                };
            });
        }
    };

    useEffect(() => {
        if (newBoxData.boxLocationX) fetchLocationName();
    }, [newBoxData.boxLocationX]);

    console.log(newBoxData);

    const handleAddNewBox = (e) => {
        const { name, type, value, checked } = e.target;
        setNewBoxData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddNewBoxSend = async () => {
        const fileInput = document.getElementById("formFile");
        const formData = new FormData();
        formData.append("box_image", fileInput.files[0]);
        // eslint-disable-next-line no-underscore-dangle
        formData.append("currentUser", currentUser._id);

        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(newBoxData)) {
            formData.append(key, value);
        }

        const fetchOptionNewBoxData = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        };

        const sendNewBoxData = await fetch(
            "https://morning-shelf-75082.herokuapp.com/box/addbox",
            fetchOptionNewBoxData,
        );
        const json = await sendNewBoxData.json();

        if (json.success) {
            console.log(json);
            handleAddNewBoxClose();
        }

        window.location.reload();
    };

    return (
        <Modal
            show={addNewBox}
            onHide={handleAddNewBoxClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <Modal.Header closeButton>
                <Modal.Title>Add a new box</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Show your box with a picture</Form.Label>
                        <Form.Control type="file" name="box_image" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAdress">
                        <Form.Label>Where is your box located?</Form.Label>
                        <div className="form-map-container">
                            <MapContainer
                                center={[52, 13]}
                                zoom={13}
                                zoomControl={false} // no +/-  Button to zoom
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker
                                    position={[52, 13]}
                                    icon={
                                        new Icon({
                                            iconUrl: markerIconPng,
                                            iconSize: [25, 41],
                                            iconAnchor: [12, 41],
                                        })
                                    }
                                />
                                <MapSearch setNewBoxData={setNewBoxData} />
                            </MapContainer>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text className="text-muted">
                            What is in your box?
                        </Form.Text>
                        <div className="checkbox-container">
                            <div className="checkbox-left">
                                <Form.Check
                                    type="checkbox"
                                    label="Books"
                                    name="books"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.books}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Cloths"
                                    name="cloths"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.cloths}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Dishes"
                                    name="dishes"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.dishes}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Toys"
                                    name="toys"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.toys}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Shoes"
                                    name="shoes"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.shoes}
                                />
                            </div>
                            <div className="checkbox-right">
                                <Form.Check
                                    type="checkbox"
                                    label="Decoration"
                                    name="decoration"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.decoration}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Gadgets"
                                    name="gadgets"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.gadgets}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Tools"
                                    name="tools"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.tools}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="DVD"
                                    name="dvd"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.dvd}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Videogames"
                                    name="videogames"
                                    onChange={handleAddNewBox}
                                    checked={addNewBox.videogames}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleAddNewBoxClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddNewBoxSend}>
                    Add a new box
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddNewBox;
