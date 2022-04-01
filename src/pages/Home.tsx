import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Hotel from "../components/Hotel";

//Interface
import HotelInterface from "../interfaces/HotelInterface"

type Props = {
  rating: number,
  adults: number,
  children: number,
  setSelectedHotel: (arg: object) => void,
  setRooms: (arg: object) => void,
  rooms: any;
  setSelectedRoom: any,
  // selectedRoom: any,
  setRatePlans: (arg: object) => void,
  setRoomsByOccupancy: (arg: object) => void,
  roomsByOccupancy: any,
};

const Home: FC<Props> = ({
  rating,
  adults,
  children,
  setSelectedHotel,
  setRooms,
  rooms,
  setSelectedRoom,
  // selectedRoom,
  setRatePlans,
  setRoomsByOccupancy,
  roomsByOccupancy,
}) => {

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
    const hotels = allHotels.filter((el: HotelInterface) => {
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
        {hotelsByRating.map((hotel: HotelInterface) => {
          // console.log(hotel);
            return(
                <Hotel
                  key={hotel.id}
                  hotel={hotel}
                  adults={adults}
                  children={children}
                  setSelectedHotel={setSelectedHotel}
                  setRooms={setRooms}
                  rooms={rooms}
                  setSelectedRoom={setSelectedRoom}
                  // selectedRoom={selectedRoom}
                  setRatePlans={setRatePlans}
                  setRoomsByOccupancy={setRoomsByOccupancy}
                  roomsByOccupancy={roomsByOccupancy}
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