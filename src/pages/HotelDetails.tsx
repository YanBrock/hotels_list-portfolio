import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useState, useEffect } from "react"

//Materials
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

//Styles
import styled from "styled-components";

//Components
import Room from "../components/Room";

//Interface
import HotelInterface from "../interfaces/HotelInterface"
import RoomInterface from "../interfaces/RoomInterface";

type Props = {
    selectedHotel: HotelInterface,
    setSelectedRoom: (arg: RoomInterface) => void,
    adults: number,
    setAdults: (arg: number) => void,
    children: number,
    setChildren: (arg: number) => void;
    setSelectedRatePlans: any
    selectedRatePlans: any
};

const HotelDetails: FC<Props> = ({ 
    selectedHotel, 
    setSelectedRoom, 
    adults, 
    setAdults,
    children,
    setChildren,
    setSelectedRatePlans,
    selectedRatePlans,
}) => {

    const [hotelRooms, setHotelRooms] = useState<any>({});
    const [filteredRooms, setFilteredRooms] = useState<RoomInterface[]>([]);

    const getRooms = async () => {
        try {
            const api = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${selectedHotel.id}`);
            const data = await api.json();

            setHotelRooms(data);
            setFilteredRooms(data.rooms);
        } catch (e) {
            console.log(e);
        }
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
            <section className="heading">
                <h1 className="heading_title">
                    {selectedHotel.name}
                </h1>
                
                <div className="heading_rating">
                    {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return(
                                <FaStar 
                                    key={i} 
                                    size={25} 
                                    color={ratingValue <= parseInt(selectedHotel.starRating) ? "#ffc107" : "#e4e5e9"}
                                />
                            )
                        })
                    }
                </div>
            </section>

            <section className="gallery">
                <SplideStyled
                    options={{
                        perPage: 1,
                        arrows: selectedHotel.images.length > 1 ? true : false,
                        // pagination: false,
                        // drag: "free",
                        // gap: "5rem",
                    }}
                >
                    {selectedHotel.images.map((image: {url: string, alt: string}) => {
                        return(
                            <SplideSlideStyled key={image.url}>
                                <img src={image.url} alt={image.alt} />
                            </SplideSlideStyled>
                        )
                    })}
                    
                </SplideStyled>

                <div className="gallery_info">
                    <h3>About {selectedHotel.name}:</h3>
                    <div className="description">{selectedHotel.description}</div>

                    {selectedHotel.facilities.length !== 0 && (
                        <h3>Facilities:</h3>
                    )}

                    <div className="facilities">
                        {selectedHotel.facilities.map((item: any, i: number) => {
                            return(
                                <div className="item" key={i}>{item.code}</div>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="contactData">
                
                <div className="contactData_location">
                    <h3>Location:</h3>
                    <div className="address">
                        <div className="address_item">
                            <b>Country: </b> 
                            {selectedHotel.country} (Country code: {selectedHotel.countryCode}, Postcode: {selectedHotel.postcode});
                        </div>
                        <div className="address_item"> 
                            <b>Town: </b> 
                            {selectedHotel.town};
                        </div>
                        <div className="address_item">
                            <b>Address 1: </b> 
                            {selectedHotel.address1};
                        </div>
                        <div className="address_item">
                            <b>Address 2: </b> 
                            {selectedHotel.address2};
                        </div>

                        {selectedHotel.position !== undefined && (
                            <div className="address_item">
                            <b>Coordinates: </b> 
                            {`${selectedHotel.position.latitude}.${selectedHotel.position.longitude}; Time zone: ${selectedHotel.position.timezone}`}.
                        </div>
                        )}
                        
                    </div>
                </div>
                <div className="contactData_contact">
                    <h3>Contacts:</h3>
                    <div className="item">
                        <b>Phone number: </b>
                        {selectedHotel.telephone};
                    </div>
                    <div className="item">
                        <b>Email: </b>
                        {selectedHotel.email}.
                    </div>
                </div>
                
                <div className="contactData_registrationTime">
                    <h3>Registration time:</h3>
                    {`${selectedHotel.checkInHours}:${selectedHotel.checkInMinutes} - ${selectedHotel.checkOutHours}:${selectedHotel.checkOutMinutes}`}
                </div>
            </section>

            <section className="hotelRooms">
                <h3>Rooms:</h3>
                
                <div className="hotelRooms_rooms">

                    {filteredRooms.map((room: RoomInterface, i: number) => {
                        return(
                            <LinkStyled key={room.id} to={`/room-details/${room.id}`} onClick={() => {setSelectedRoom(room); setSelectedRatePlans(hotelRooms.ratePlans[i])}}>
                                <Room
                                    id={room.id}
                                    name={room.name}
                                    occupancy={room.occupancy}
                                    longDescription={room.longDescription}
                                    disabledAccess={room.disabledAccess}
                                    selectedRatePlans={selectedRatePlans}
                                />
                            </LinkStyled>
                        )
                    })}
                </div>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .heading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;

        &_title {
            margin-right: 3rem;
        }
    }

    .gallery {
        display: flex;
        margin-bottom: 2rem;

        &_info {
            width: 45%;

            .description {
                margin-bottom: 1rem;
            }

            h3 {
                margin-bottom: .5rem;
            }

            .facilities {
                display: flex;
                flex-wrap: wrap;
                gap: 3px;
                max-height: 15rem;
                overflow: scroll;

                .item {
                    width: 48%;
                    height: 3rem;
                    // background-color: #9dc997;
                    background-color: #FFF;
                    border-radius: 3px;
                    overflow-y: scroll;
                    padding: 3px;
                }
            }
        }
    }

    .contactData {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 2rem;
        border: solid 1px #e6e6e6;
        border-radius: 3px;
        background-color: white;

        & > div {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: .5rem;
        }

        & > div:not(:last-child) {
            border-right: solid 1px #e6e6e6;
        }

        .address_item:not(:last-child), &_contact .item:not(:last-child) {
            margin-bottom: 5px;
        }

        h3 {
            margin-bottom: .5rem;
        }
    }

    .hotelRooms {
        width: 100%;
        margin-bottom: 2rem;

        h3 {
            margin-bottom: .5rem;
        }

        &_rooms {
            width: 100%;
            // height: 40rem;
            // overflow-y: scroll;
            padding: .5rem;
        }
    }
`;

const SplideStyled = styled(Splide)`
    margin-bottom: 2rem;
    min-width: 50%;
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SplideSlideStyled = styled(SplideSlide)`
    display: flex;
    justify-contenr: center;
    align-items: center;
    width: 60rem;
    height: 30rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default HotelDetails;