import { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Header from './components/Header';
import Pages from "./pages/Pages"
import Footer from "./components/Footer"
import RoomInterface from './interfaces/RoomInterface';

const App: FC = () => {

  const [rating, setRating] = useState<number>(0);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [selectedHotel, setSelectedHotel] = useState<any>({});
  const [selectedRoom, setSelectedRoom] = useState<any>({});
  const [selectedRatePlans, setSelectedRatePlans] = useState({});
  const [hotelsImages, setHotelsImages] = useState([]);

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
          hotelsImages={hotelsImages}
        />

        <Pages 
          rating={rating}
          adults={adults}
          children={children}
          setSelectedHotel={setSelectedHotel}
          selectedHotel={selectedHotel}
          setSelectedRoom={setSelectedRoom}
          selectedRoom={selectedRoom}
          setSelectedRatePlans={setSelectedRatePlans}
          selectedRatePlans={selectedRatePlans}
          setHotelsImages={setHotelsImages}
        />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
