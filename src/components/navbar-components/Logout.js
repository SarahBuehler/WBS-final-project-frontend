import Modal from "react-bootstrap/Modal";
import { ModalFooter, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Logout = ({ showUserLogout, handleUserLogoutClose, setCurrentUser }) => {
    const handleUserLogoutSend = async () => {
        localStorage.removeItem("token");
        setCurrentUser({});
        handleUserLogoutClose();
        window.location.reload();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Modal
            show={showUserLogout}
            onHide={handleUserLogoutClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <ModalHeader closeButton>
                <Modal.Title>Log out</Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <h4>Do you really want to log out?</h4>
                </Form>
                <ModalFooter>
                    <Button onClick={handleUserLogoutClose} type="submit">
                        no
                    </Button>
                    <Button onClick={handleUserLogoutSend} type="submit">
                        yes
                    </Button>
                </ModalFooter>
            </Modal.Body>
        </Modal>
    );
};

export default Logout;
