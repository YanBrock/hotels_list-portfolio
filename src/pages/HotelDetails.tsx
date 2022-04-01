import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react"

//Materials
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Room from "../components/Room";

//Interface
import HotelInterface from "../interfaces/HotelInterface"

type Props = {
    selectedHotel: HotelInterface,
    selectedRoom: any,
    roomsByOccupancy: any,
    setSelectedRoom: any,
};

const HotelDetails: FC<Props> = ({ selectedHotel, selectedRoom, roomsByOccupancy, setSelectedRoom }) => {

    console.log(selectedHotel);

    return(
        <Wrapper>
            <div className="header">
                <h1 className="title">
                    {selectedHotel.name}
                </h1>
                
                <div className="rating">
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
            </div>

            <SplideStyled
                options={{
                    perPage: 1,
                    // arrows: false,
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

            <div className="hotelsData">
                <h3>About {selectedHotel.name}:</h3>
                <div className="description">{selectedHotel.description}</div>
                <h3>Facilities:</h3>
                <div className="facilities">
                    {selectedHotel.facilities.map((item: any, i: number) => {
                        return(
                            <div className="item" key={i}>{item.code}</div>
                        )
                    })}
                </div>
                <div className="wrapper">
                    <div className="location">
                        <h3>Location:</h3>
                        <div className="address">
                            <div className="country">Country: {selectedHotel.country} (Country code: {selectedHotel.countryCode}, Postcode: {selectedHotel.postcode})</div>
                            <div className="town">Town: {selectedHotel.town}</div>
                            <div className="street">Address 1: {selectedHotel.address1}</div>
                            <div className="street">Address 2: {selectedHotel.address2}</div>
                            <div className="coordinates">Coordinates: {`${selectedHotel.position.latitude}.${selectedHotel.position.longitude}; Time zone: ${selectedHotel.position.timezone}`}</div>
                        </div>
                    </div>
                    <div className="contacts">
                        <h3>Contacts:</h3>
                        <div className="phone">Phone number: {selectedHotel.telephone}</div>
                        <div className="email">Email: {selectedHotel.email}</div>
                    </div>
                </div>
                <div className="registrationTime">
                    <h3>Registration time:</h3>
                    {`${selectedHotel.checkInHours}:${selectedHotel.checkInMinutes} - ${selectedHotel.checkOutHours}:${selectedHotel.checkOutMinutes}`}
                </div>

                <h3>Rooms</h3>
                
                <div className="hotelRooms">
                    {roomsByOccupancy.map((room: Room) => {
                        return(
                            <LinkStyled to={`/room-details/${room.id}`} onClick={() => setSelectedRoom(room)}>
                                <Room
                                    id={room.id}
                                    name={room.name}
                                    occupancy={room.occupancy}
                                    longDescription={room.longDescription}
                                    // roomsByOccupancy={roomsByOccupancy}
                                />
                            </LinkStyled>
                            
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .header {
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;

        .title {
            margin: 0 3rem 0 0;
        }
    }

    .hotelsData {
        display: flex;
        flex-direction: column;

        .description {
            margin: 0 0 1rem 0;
        }

        .facilities{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            max-height: 15rem;
            margin: 0 0 1rem 0;

            .item{
                width: 10rem;
                height: 2rem;
                border: solid 1px black;
                border-radius: 3px;
                margin: .5rem;
            }
        }

        .wrapper {
            display: flex;
            margin: 0 0 1rem 0;

            .location {
                margin: 0 5rem 0 0;
            }
        }
    }
`;

const SplideStyled = styled(Splide)`
    display: flex;
    justify-contenr: center;
    align-items: center;
    max-width: 80%;
    margin: o auto;
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