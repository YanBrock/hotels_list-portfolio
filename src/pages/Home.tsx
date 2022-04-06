import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Hotel from "../components/Hotel";

//Interface
import HotelInterface from "../interfaces/HotelInterface"
import RoomsInterface from "../interfaces/RoomInterface"

type Props = {
  rating: number,
  adults: number,
  setAdults: (arg: number) => void,
  children: number,
  setChildren: (arg: number) => void;
  setSelectedHotel: (arg: HotelInterface) => void,
  setSelectedRoom: (arg: RoomsInterface) => void,
  setSelectedRatePlans: any,
  selectedRatePlans: any,
  setHotelsImages: any,
};

const Home: FC<Props> = ({
  rating,
  adults,
  setAdults,
  children,
  setChildren,
  setSelectedHotel,
  setSelectedRoom,
  setSelectedRatePlans,
  selectedRatePlans,
  setHotelsImages,
}) => {

  const [allHotels, setAllHotels] = useState<HotelInterface[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<HotelInterface[]>([]);

  const getHotels = async () => {
    const api = await fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG");
    const data = await api.json();
    // console.log(data);
    setAllHotels(data);
    setFilteredHotels(data);
    getHotelsImages(data);
  }

  const getFilteredHotels = async (rating: number) => {
    const hotelsList = allHotels.filter((hotel: HotelInterface) => {
      return parseInt(hotel.starRating) >= rating;
    });
    setFilteredHotels(hotelsList);
  }

  const getHotelsImages = (allHotels: HotelInterface[]) => {
    const hotelsImages = allHotels.map((hotel: HotelInterface) => {
      return hotel.images[0].url;
    });

    setHotelsImages(hotelsImages);
  }

  useEffect(() => {
    getFilteredHotels(rating);
  }, [rating])

  useEffect(() => {
    getHotels();
  }, []);

  return(
    <div>
        {filteredHotels.map((hotel: HotelInterface) => {
          // console.log(hotel);
          return(
            <Hotel
              key={hotel.id}
              hotel={hotel}
              adults={adults}
              children={children}
              setSelectedHotel={setSelectedHotel}
              setSelectedRoom={setSelectedRoom}
              setSelectedRatePlans={setSelectedRatePlans}
              selectedRatePlans={selectedRatePlans}
            />
          );
        })}
    </div>
  );
};

export default Home;