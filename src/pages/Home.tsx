import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Hotel from "../components/Hotel";

//Interface
import HotelInterface from "../interfaces/HotelInterface"
import RoomsInterface from "../interfaces/RoomInterface"

type Props = {
  rating: number,
  adults: number,
  children: number,
  setSelectedHotel: (arg: HotelInterface) => void,
  setRooms: (arg: RoomsInterface[]) => void,
  rooms: RoomsInterface[];
  setSelectedRoom: (arg: RoomsInterface) => void,
  setRatePlans: (arg: object) => void,
  setRoomsByOccupancy: (arg: RoomsInterface[]) => void,
  roomsByOccupancy: RoomsInterface[],
};

const Home: FC<Props> = ({
  rating,
  adults,
  children,
  setSelectedHotel,
  setRooms,
  rooms,
  setSelectedRoom,
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
                  setRatePlans={setRatePlans}
                  setRoomsByOccupancy={setRoomsByOccupancy}
                  roomsByOccupancy={roomsByOccupancy}
                />
            );
        })}
    </div>
  );
};

export default Home;