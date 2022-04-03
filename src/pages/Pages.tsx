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
    setRooms: (arg: RoomInterface[]) => void,
    rooms: RoomInterface[],
    setSelectedRoom: (arg: RoomInterface) => void,
    selectedRoom: RoomInterface,
    setRatePlans: any,
    ratePlans: any,
    setRoomsByOccupancy: (arg: RoomInterface[]) => void,
    roomsByOccupancy: RoomInterface[],
}

const Pages: FC<Props> = ({
    rating,
    adults,
    children,
    setSelectedHotel,
    selectedHotel,
    setRooms,
    rooms,
    setSelectedRoom,
    selectedRoom,
    setRatePlans,
    ratePlans,
    setRoomsByOccupancy,
    roomsByOccupancy
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
                            setRooms={setRooms}
                            rooms={rooms}
                            setRatePlans={setRatePlans}
                            setRoomsByOccupancy={setRoomsByOccupancy}
                            roomsByOccupancy={roomsByOccupancy}
                            setSelectedRoom={setSelectedRoom}
                        />
                    } 
                />

                <Route
                    path="/hotel-details/:name"
                    element={
                        <HotelDetails
                            selectedHotel={selectedHotel}
                            setSelectedRoom={setSelectedRoom}
                            roomsByOccupancy={roomsByOccupancy}
                        />}
                    />

                <Route 
                    path="/room-details/:name"
                    element={
                        <RoomDetails
                            selectedRoom={selectedRoom}
                        />}
                />
            </Routes>
    );
};

export default Pages;