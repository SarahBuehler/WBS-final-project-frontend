import "./App.css";
import { useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "./components/Navbar";
import Karte from "./components/Karte";
import TagSlide from "./components/TagSlide";
import Footer from "./components/Footer";

function App() {
    const [currentUserBoxes, setCurrentUserBoxes] = useState([]);

    return (
        <>
            <Navbar setCurrentUserBoxes={setCurrentUserBoxes} />
            <TagSlide />
            <Karte currentUserBoxes={currentUserBoxes} />
            <Footer />
        </>
    );
}

export default App;
