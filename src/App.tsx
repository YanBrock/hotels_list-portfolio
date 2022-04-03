import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Pages from "./pages/Pages"
import Filter from './components/Filter';
import Header from './components/Header';
import Footer from "./components/Footer"

//Interface
import HotelInterface from "./interfaces/HotelInterface"
import RoomInterface from './interfaces/RoomInterface';

//Styles
import styled from 'styled-components';

const App: React.FC = () => {

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [selectedHotel, setSelectedHotel] = useState<any>();
  const [rooms, setRooms] = useState<RoomInterface[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any>();
  const [ratePlans, setRatePlans] = useState([]);
  const [roomsByOccupancy, setRoomsByOccupancy] = useState<RoomInterface[]>([]);

  return (
    <div className="App gradient">
      <BrowserRouter>
        <Header
          setRating={setRating}
          setHover={setHover}
          rating={rating}
          hover={hover}
          setAdults={setAdults}
          adults={adults}
          setChildren={setChildren}
          children={children}
        />

        <Pages 
          rating={rating}
          adults={adults}
          children={children}
          setSelectedHotel={setSelectedHotel}
          selectedHotel={selectedHotel}
          setRooms={setRooms}
          rooms={rooms}
          setSelectedRoom={setSelectedRoom}
          selectedRoom={selectedRoom}
          setRatePlans={setRatePlans}
          ratePlans={ratePlans}
          setRoomsByOccupancy={setRoomsByOccupancy}
          roomsByOccupancy={roomsByOccupancy}
        />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100%;
// `;

export default App;
