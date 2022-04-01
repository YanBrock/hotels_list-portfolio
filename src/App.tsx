import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Pages from "./pages/Pages"
import Filter from './components/Filter';
import Header from './components/Header';

//Interface
import HotelInterface from "./interfaces/HotelInterface"

//Styles
import styled from 'styled-components';

const App: React.FC = () => {

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [selectedHotel, setSelectedHotel] = useState<any>({});
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState<any>({})
  const [ratePlans, setRatePlans] = useState([]);
  const [roomsByOccupancy, setRoomsByOccupancy] = useState<any>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filter
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
      </BrowserRouter>
    </div>
  );
};

const HeaderSyled = styled(Header)`
  position: relative;
`;

const FilterStyled = styled(Filter)`
  position: absolute;
  bottom: -10px;
  left: 50%;
`;

export default App;
