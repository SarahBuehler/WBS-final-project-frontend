// const MyBoxes = ({ currentUser }) => {
//     return currentUser.userBoxes.map((item, index) => {
//         return (
//             <li key={item.x}>
//                 <div>Box {index + 1}</div>
//                 <div>Location: {item.boxLocationCity}</div>
//                 <img
//                     src={`http://localhost:8080/images/${item.boxImagePath}`}
//                     alt="boximage"
//                 />
//                 <div>
//                     <button type="button" className="btn btn-danger btn-sm">
//                         delete
//                     </button>
//                 </div>
//             </li>
//         );
//     });
// };

import Modal from "react-bootstrap/Modal";

const MyBoxes = ({ myBoxes, handleMyBoxesClose, currentUser }) => {
    const Boxes = () => {
        return currentUser.userBoxes?.map((item, index) => {
            return (
                // eslint-disable-next-line no-underscore-dangle, react/no-array-index-key
                <div className="box-form" key={`${item.x}/${item.y}-${index}`}>
                    <h4>Box {index + 1}</h4>
                    <h6>Box Location: {item.boxLocationCity}</h6>
                    <div>x: {item.x}</div>
                    <div>y: {item.y}</div>
                    <img
                        src={`https://morning-shelf-75082.herokuapp.com/images/${item.boxImagePath}`}
                        alt="img"
                    />
                    {/*  <h6>Box Items:</h6>
                    <p>Tag1 Tag2 Tag3</p> */}
                    {/* <button type="button" className="btn btn-danger btn-sm">
                        Delete Box
                    </button> */}
                    <hr />
                </div>
            );
        });
    };

    return (
        <Modal
            show={myBoxes}
            onHide={handleMyBoxesClose}
            backdrop="true"
            fade="true"
            centered="true"
        >
            <Modal.Header closeButton>
                <Modal.Title>My Boxes</Modal.Title>
            </Modal.Header>
            <Modal.Body>{Boxes()}</Modal.Body>
        </Modal>
    );
};

export default MyBoxes;
