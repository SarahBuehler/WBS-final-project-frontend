import { useState } from "react";
import { ModalHeader } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = ({ userSignup, handleUserSignupClose }) => {
    const [signupData, setSignupData] = useState({
        signupUsername: "",
        signupPassword: "",
        signupRepeatPassword: "",
        signupCurrentUserLocation: "",
    });

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignupSend = async () => {
        const response = await fetch(
            "https://morning-shelf-75082.herokuapp.com/box/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(signupData),
            },
        );
        const data = await response.json();
        if (data.success) {
            handleUserSignupClose();
            window.location.reload();
        }
    };

    return (
        <Modal
            show={userSignup}
            onHide={handleUserSignupClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <ModalHeader closeButton>
                <Modal.Title>Sing up</Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form onSubmit={handleSignupSubmit}>
                    <Form.Group className="mb-3" controlId="signup_username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            name="signupUsername"
                            value={signupData.signupUsername}
                            onChange={handleSignupChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signup_password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            name="signupPassword"
                            value={signupData.signupPassword}
                            onChange={handleSignupChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="signup_password_repeat"
                    >
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Repeat password"
                            name="signupRepeatPassword"
                            value={signupData.signupRepeatPassword}
                            onChange={handleSignupChange}
                        />
                        <p>
                            {signupData.signupPassword ===
                            signupData.signupRepeatPassword
                                ? ""
                                : "Password do not match!"}
                        </p>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="signup_userlocation"
                    >
                        <Form.Label>Your current location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city"
                            name="signupCurrentUserLocation"
                            value={signupData.signupCurrentUserLocation}
                            onChange={handleSignupChange}
                        />
                    </Form.Group>
                    <Button onClick={handleSignupSend} type="submit">
                        Send
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Signup;
