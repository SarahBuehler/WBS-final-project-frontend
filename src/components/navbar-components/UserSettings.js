import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UserSettings = ({
    userSettings,
    handleUserSettingsClose,
    currentUser,
}) => {
    // Delete Account Function:
    const handleDeleteAccount = async () => {
        await fetch("https://morning-shelf-75082.herokuapp.com/box/delete", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=utf-8",
            },
        });
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <Modal
            show={userSettings}
            onHide={handleUserSettingsClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <Modal.Header closeButton>
                <Modal.Title>User settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Username: {currentUser.userName}</h4>
                <h4>City: {currentUser.userLocation}</h4>
                <h4>
                    Delete your account:{" "}
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={handleDeleteAccount}
                    >
                        delete
                    </button>
                </h4>
            </Modal.Body>
            {/*             <Modal.Footer>
                <Button variant="secondary" onClick={handleUserSettingsClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleUserSettingsClose}>
                    Save settings
                </Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default UserSettings;
