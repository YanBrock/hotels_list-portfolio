import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Materials
import { FaStar } from "react-icons/fa";

//Styles
import styled from "styled-components";

//Components
import Room from "./Room"

//Interface
import HotelInterface from "../interfaces/HotelInterface"
import RoomInterface from "../interfaces/RoomInterface";

type Props = {
    hotel: HotelInterface,
    adults: number,
    children: number,
    setSelectedHotel: (arg: HotelInterface) => void,
    setSelectedRoom: (arg: RoomInterface) => void,
    setSelectedRatePlans: any,
    selectedRatePlans: any,
}

const Hotel: FC<Props> = ({
    hotel,
    adults,
    children,
    setSelectedHotel,
    setSelectedRoom,
    setSelectedRatePlans,
    selectedRatePlans,
}) => {

    const [hotelRooms, setHotelRooms] = useState<any>({});
    const [filteredRooms, setFilteredRooms] = useState<RoomInterface[]>([]);

    const getRooms = async () => {
        const api = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`);
        const data = await api.json();

        setHotelRooms(data);
        setFilteredRooms(data.rooms);
        
        console.log(data);
    }

    const getFilteredRooms = async (adults: number, children: number) => {
        const allFilteredRooms = hotelRooms.rooms.filter((room: RoomInterface) => {
          return (room.occupancy.maxAdults >= adults && room.occupancy.maxChildren >= children);
        });
        setFilteredRooms(allFilteredRooms);
    }

    useEffect(() => {
        getFilteredRooms(adults, children);
    }, [adults, children]);

    useEffect(() => {
        getRooms();
    }, []);

    return(
        <Wrapper>
            <Card>
                <div className="hotelsData">
                    <SplideStyled
                        options={{
                            perPage: 1,
                            arrows: hotel.images.length > 1 ? true : false,
                            // pagination: false,
                            // drag: "free",
                            // gap: "5rem",
                        }}
                    >
                        {hotel.images.map((image) => {
                            return(
                                <SplideSlide key={image.url}>
                                    <img src={image.url} alt="" />
                                </SplideSlide>
                            );
                        })}
                    </SplideStyled>

                    <div className="rating">
                        {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return(
                                    <FaStar 
                                        key={i} 
                                        size={25} 
                                        color={ratingValue <= parseInt(hotel.starRating) ? "#ffc107" : "#e4e5e9"}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="titles">
                        <LinkStyled 
                            to={`/hotel-details/${hotel.id}`} 
                            onClick={() => setSelectedHotel(hotel)}
                        >
                            <h1>{hotel.name}</h1>
                        </LinkStyled>
                        <p className="ad1">{hotel.address1}</p>
                        <p>{hotel.address2}</p>
                    </div>
                </div>

                {/* <h2 className="roomsTitle">{hotel.name} Rooms</h2> */}

                <div className="hotelRooms">
                    {filteredRooms.map((room: RoomInterface, i: number) => {
                        return(
                            <LinkStyled to={`/room-details/${room.id}`} onClick={() => {setSelectedRoom(room); setSelectedRatePlans(hotelRooms.ratePlans[i]); console.log(hotelRooms.ratePlans[i])}} key={room.id}>
                                <Room 
                                    id={room.id}
                                    name={room.name}
                                    occupancy={room.occupancy}
                                    longDescription={room.longDescription}
                                    disabledAccess={room.disabledAccess}
                                    selectedRatePlans={selectedRatePlans}
                                />
                            </LinkStyled>
                        );
                    })}
                </div>
            </Card>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 3px 10px gray;
  padding: 1rem;

  @media only screen
    and (min-width: 320px)
    and (max-width: 620px) {
        margin: .5rem 0
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 30rem;
    width: 100%;
    max-width: 70rem;
    border-radius: 3px; 
    overflow: hidden;

    .hotelsData {
        display: flex;
        height: 30%;
        padding-bottom: 1rem;
        box-shadow: 0px 6px 10px gray;
        z-index: 3;
        position: relative; 

        @media only screen
        and (min-width: 320px)
        and (max-width: 620px) {
            flex-direction: column;
            align-items: center;
        }

        img {
            width: 15rem;
            height: 10rem;
            object-fit: cover;
        }
    
        .titles {
            @media only screen
            and (min-width: 320px)
            and (max-width: 620px) {
                text-align: center;
            }

            h1 {
                margin-bottom: .5rem;
                border: 3px solid transparent;
                transition: all .1s ease-in;

                &:hover {
                    // color: rgba(0, 0, 0, .7);
                    // text-decoration: underline;
                    // transform: scale(110%, 110%);
                    border-bottom: 3px solid black;
                }
            }
    
            p.ad1{
                margin-bottom: .5rem;
            }
        }
    
        .rating {
            position: absolute;
            top: 0;
            right: 0;

            @media only screen
            and (min-width: 320px)
            and (max-width: 620px) {
                position: initial;
            }
        }
    }

    // .roomsTitle {
    //     display: flex;
    //     width: 100%;
    //     justify-content: center;
    // }

    .hotelRooms {
        height: 70%;
        max-height: 20rem;
        overflow-y: scroll;
        box-shadow: inset 1px 0px 6px gray, inset -1px -1px 6px gray;
        padding: 1rem .5rem .5rem .5rem;
    }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SplideStyled = styled(Splide)`
  max-width: 15rem;
  margin-right: 1rem;

  @media only screen
    and (min-width: 320px)
    and (max-width: 620px) {
        margin: 0;
    }
`;

export default Hotel;