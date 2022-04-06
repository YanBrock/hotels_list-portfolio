import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Components
import Home from "./Home"
import HotelDetails from "./HotelDetails";
import RoomDetails from "./RoomDetails";

//Interface
import HotelInterface from "../interfaces/HotelInterface"
import RoomInterface from "../interfaces/RoomInterface";

type Props = {
    rating: number,
    adults: number,
    children: number,
    setSelectedHotel: (arg: HotelInterface) => void,
    selectedHotel: HotelInterface,
    setSelectedRoom: (arg: RoomInterface) => void,
    selectedRoom: RoomInterface,
    setSelectedRatePlans: any,
    selectedRatePlans: any,
    setHotelsImages: any,
}

const Pages: FC<Props> = ({
    rating,
    adults,
    children,
    setSelectedHotel,
    selectedHotel,
    setSelectedRoom,
    selectedRoom,
    setSelectedRatePlans,
    selectedRatePlans,
    setHotelsImages,
}) => {

    const location = useLocation();

    return(
            <Routes location={location} key={location.pathname}>
                <Route 
                    path="/" 
                    element={
                        <Home 
                            rating={rating} 
                            adults={adults}
                            children={children}
                            setSelectedHotel={setSelectedHotel}
                            setSelectedRoom={setSelectedRoom}
                            setSelectedRatePlans={setSelectedRatePlans}
                            selectedRatePlans={selectedRatePlans}
                            setHotelsImages={setHotelsImages}
                        />
                    } 
                />

                <Route
                    path="/hotel-details/:name"
                    element={
                        <HotelDetails
                            selectedHotel={selectedHotel}
                            setSelectedRoom={setSelectedRoom}
                            adults={adults}
                            children={children}
                            setSelectedRatePlans={setSelectedRatePlans}
                        />
                    }
                />

                <Route 
                    path="/room-details/:name"
                    element={
                        <RoomDetails
                            selectedRoom={selectedRoom}
                            selectedRatePlans={selectedRatePlans}
                        />
                    }
                />
            </Routes>
    );
};

export default Pages;