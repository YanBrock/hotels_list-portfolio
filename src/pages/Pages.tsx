import { Route, Routes, useLocation } from "react-router-dom";

//Components
import Home from "./Home"
// import HotelDetails from "./HotelDetails";

const Pages = () => {

    const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/hotel-details/:name" element={<HotelDetails />} /> */}
        </Routes>
    );
};

export default Pages;