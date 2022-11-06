const MobileView = ({ handleShow, handleUserSettings }) => {
    return (
        <nav className="nav container">
            <a className="navlogo">
                BOX <i className="bx bx-package" />
            </a>
            <div className="navmenu">
                <ul className="navlist">
                    <li className="navitem">
                        <a className="navlink" onClick={handleShow}>
                            <i className="bx bx-plus-circle" />
                            <span>Add box</span>
                        </a>
                    </li>
                    <li className="navitem">
                        <a href="#home" className="navlink">
                            <i className="bx bx-search" />
                            <span>City</span>
                        </a>
                    </li>
                    <li className="navitem">
                        <a
                            href="#home"
                            className="navlink"
                            // onClick={handleMyBoxShow}
                        >
                            <i className="bx bx-box" />
                            <span>My boxes</span>
                        </a>
                    </li>
                    <li className="navitem">
                        <a
                            href="#home"
                            className="navlink"
                            onClick={handleUserSettings}
                        >
                            <i className="bx bx-user" />
                            <span>User</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileView;
