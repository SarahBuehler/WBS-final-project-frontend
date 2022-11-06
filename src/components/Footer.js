import { CDBFooter, CDBBox, CDBFooterLink } from "cdbreact";
import { ModalFooter, Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    const [contact, setContact] = useState(false);
    const handleContactClose = () => setContact(false);
    const handleContact = () => setContact(true);

    const [feedback, setFeedback] = useState(false);
    const handleFeedbackClose = () => setFeedback(false);
    const handleFeedback = () => setFeedback(true);

    const handleSubmitSend = () => {
        handleFeedbackClose();
    };

    return (
        <>
            <CDBFooter className="text-white footer shadow p-0">
                <CDBBox className="mx-auto py-3 " style={{ width: "90%" }}>
                    <Row className="d-flex align-items-center">
                        <Col sm={3} className="footer-logo">
                            <CDBBox
                                className="d-flex justify-content-center"
                                style={{ cursor: "pointer" }}
                            >
                                <a
                                    href="/"
                                    className="text-decoration-none p-0 text-white"
                                >
                                    <img
                                        className="box-image"
                                        src="logo-image/freebox-logo-rund.png"
                                        alt=""
                                    />
                                </a>
                            </CDBBox>
                        </Col>

                        <Col sm={6}>
                            <CDBBox flex="column" className="footer-vision">
                                <br />
                                <p>
                                    <h6>OUR VISION: </h6>
                                    We like the idea of sharing! Especially if
                                    it is about something you no longer have any
                                    use for. Did you ever think about not
                                    throwing it away, but putting it in a
                                    freebox? Then maybe you are familiar with
                                    freeboxes that used to have nice things in
                                    there, but because they have not been to
                                    well-traveled places, they were left behind.
                                    What a waste of good things. That is what we
                                    invented this app for. Make a picture of the
                                    freebox, tag what is inside, and post the
                                    box with its location. Like this people can
                                    check what is in the box and where. Maybe
                                    the goods are in new hands in minutes.
                                </p>
                            </CDBBox>
                        </Col>

                        <Col sm={3}>
                            <CDBBox flex="column" className="footer-contact">
                                <CDBFooterLink
                                    className="footer-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleContact}
                                >
                                    CONTACT
                                </CDBFooterLink>
                            </CDBBox>
                            <br />

                            <CDBBox flex="column" className="footer-contact">
                                <CDBFooterLink
                                    className="footer-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleFeedback}
                                >
                                    FEEDBACK
                                </CDBFooterLink>
                            </CDBBox>
                        </Col>
                    </Row>
                </CDBBox>

                <CDBBox
                    display="flex"
                    className=" copyright justify-content-center  w-100 p-0 "
                >
                    <small className="p-3">
                        &copy; Devwares, 2022. All rights reserved.
                    </small>
                </CDBBox>
            </CDBFooter>

            <Modal
                show={contact}
                onHide={handleContactClose}
                backdrop="true"
                fade="true"
                centered="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Our E-mail: </h6>
                    max.mustermann@gmail.com
                    <br />
                    <br />
                    <h6>Address: </h6>
                    Silbersteinstr. 12 12055 Berlin
                </Modal.Body>
            </Modal>

            <Modal
                show={feedback}
                onHide={handleFeedbackClose}
                backdrop="true"
                fade="true"
                centered="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        action="mailto:max.mustermann@gmail.com"
                        method="get"
                        enctype="text/plain"
                    >
                        <textarea
                            className="feedbackTextarea"
                            rows="4"
                            cols="58"
                            defaultValue={null}
                        />
                    </Form>
                </Modal.Body>

                <ModalFooter>
                    <Button type="submit" onClick={handleSubmitSend}>
                        Send
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
