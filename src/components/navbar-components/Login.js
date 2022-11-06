import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ModalHeader } from "react-bootstrap";
import { useState } from "react";

const Login = ({ userLogin, handleUserLoginClose, setCurrentUser }) => {
    const [loginData, setLoginData] = useState({
        loginUsername: "",
        loginPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLoginSend = async () => {
        setLoading((prev) => !prev);
        setTimeout(async () => {
            const response = await fetch(
                // "https://morning-shelf-75082.herokuapp.com/box/login",
                "https://morning-shelf-75082.herokuapp.com/box/login",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token",
                        )}`,

                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify(loginData),
                },
            );
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("token", data.token);
                setCurrentUser(data.data);
                handleUserLoginClose();
            }
        }, 1000);
    };

    return (
        <Modal
            show={userLogin}
            onHide={handleUserLoginClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <ModalHeader closeButton>
                <Modal.Title>Log in</Modal.Title>
            </ModalHeader>
            <Modal.Body>
                {loading ? (
                    <div className="classic-2" />
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="signup_username"
                        >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="loginUsername"
                                value={loginData.loginUsername}
                                onChange={handleLoginChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="signup_password"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                name="loginPassword"
                                value={loginData.loginPassword}
                                onChange={handleLoginChange}
                            />
                        </Form.Group>
                        <Button onClick={handleLoginSend} type="submit">
                            Send
                        </Button>
                    </Form>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default Login;
