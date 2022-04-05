import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Header from './components/Header';
import Pages from "./pages/Pages"
import Footer from "./components/Footer"

//Interface
import RoomInterface from './interfaces/RoomInterface';

const App: React.FC = () => {

  const [rating, setRating] = useState<number>(0);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [selectedHotel, setSelectedHotel] = useState<any>({});
  const [selectedRoom, setSelectedRoom] = useState<any>({});
  const [selectedRatePlans, setSelectedRatePlans] = useState({});

  return (
    <div className="App gradient">
      <BrowserRouter>
        <Header
          setRating={setRating}
          rating={rating}
          setAdults={setAdults}
          adults={adults}
          setChildren={setChildren}
          children={children}
          selectedHotel={selectedHotel}
        />

        <Pages 
          rating={rating}
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          setSelectedHotel={setSelectedHotel}
          selectedHotel={selectedHotel}
          setSelectedRoom={setSelectedRoom}
          selectedRoom={selectedRoom}
          setSelectedRatePlans={setSelectedRatePlans}
          selectedRatePlans={selectedRatePlans}
        />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
