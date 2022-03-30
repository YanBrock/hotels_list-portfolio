import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { BrowserRouter, Link } from "react-router-dom";
import Hotel from "../components/Hotel";

type Props = {
  // setRating: (arg: number) => void,
  // setHover: (arg: number) => void,
  rating: number,
  // hover: number,
  // setAdults: (arg: number) => void,
  adults: number,
  // setChildren: (arg: number) => void,
  children: number,
};

interface Hotel {
  images: [ image: {url: string}, ],
  name: string,
  address1: string,
  address2?:string,
  starRating: string,
  id: string,
};

const Home: FC<Props> = ({rating, adults, children}) => {

  const [allHotels, setAllHotels] = useState([]);
  const [hotelsByRating, setHotelsByRating] = useState([]);

  const getHotels = async () => {
    const api = await fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG");
    const data = await api.json();
    // console.log(data);
    setAllHotels(data);
    setHotelsByRating(data);
  }

  const getHotestByRating = async (rating: number) => {
    const hotels = allHotels.filter((el: Hotel) => {
      return parseInt(el.starRating) >= rating;
    });
    setHotelsByRating(hotels);
  }

  useEffect(() => {
    getHotestByRating(rating);
  }, [rating])

  useEffect(() => {
    getHotels();
  }, []);

  return(
    <div>
        {hotelsByRating.map((hotel: Hotel) => {
          // console.log(hotel);
            return(
              <BrowserRouter>
                <Hotel
                  key={hotel.id}
                  hotel={hotel}
                  // setRating={setRating}
                  // setHover={setHover}
                  // rating={rating}
                  // hover={hover}
                  adults={adults}
                  children={children}
                />
              </BrowserRouter>
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