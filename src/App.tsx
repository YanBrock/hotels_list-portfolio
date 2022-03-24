import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Pages from "./pages/Pages"
import Filter from './components/Filter';
import Header from './components/Header';
import Home from "./pages/Home"

//Styles
import styled from 'styled-components';


const App: React.FC = () => {

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  return (
    <div className="App">
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

      <Home
        setRating={setRating}
        setHover={setHover}
        rating={rating}
        hover={hover}
        setAdults={setAdults}
        adults={adults}
        setChildren={setChildren}
        children={children}
      />
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
