import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import Hotel from "../components/Hotel";

interface Props {
  setRating: (arg: number) => void,
  setHover: (arg: number) => void,
  rating: number,
  hover: number,
  setAdults: (arg: number) => void,
  adults: number,
  setChildren: (arg: number) => void,
  children: number,
}

const Home: FC<Props> = ({setRating, setHover, rating, hover}) => {

  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const getHotels = async () => {
      const api = await fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG");
      const data = await api.json();
      console.log(data);
      setAllHotels(data);
  }

  useEffect(() => {
      getHotels();
  }, []);

  type Hotel = {
    images: [ image: {url: string}, ],
    name: string,
    address1: string,
    address2?:string,
    starRating: string,
    id: string,
  };

  return(
    <div>
        {allHotels.map((hotel: Hotel) => {
          console.log(hotel);
            return(
              <Hotel
                hotel={hotel}
                // setRating={setRating}
                // setHover={setHover}
                // rating={rating}
                // hover={hover}
              />
            );
        })}
    </div>
  );
};

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Home;