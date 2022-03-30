import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react";
import { Link } from "react-router-dom";

//Materials
import { FaStar } from "react-icons/fa";

//Styles
import styled from "styled-components";

//Components
import StarRating from "./StarRating";
import Room from "./Room"

type Props = {
    hotel: {
        images: [ image: {url: string}, ],
        name: string,
        address1: string,
        address2?:string,
        starRating: string,
        id: string,
    },

    // setRating: (arg: number) => void,
    // setHover: (arg: number) => void,
    // rating: number,
    // hover: number,
    adults: number,
    children: number,
}

const Hotel: FC<Props> = ({hotel, adults, children}) => {

    return(
        <Wrapper>
            <Card>
                
                <div className="hotelsData">
                    <SplideStyled
                    options={{
                        perPage: 1,
                        // arrows: false,
                        // pagination: false,
                        // drag: "free",
                        // gap: "5rem",
                    }}>
                        {hotel.images.map((image) => {
                            return(
                                <SplideSlide>
                                    <img src={image.url} alt="" />
                                </SplideSlide>
                            );
                        })}
                    </SplideStyled>

                    <div className="titles">
                        <Link to={`/hotel-details/${hotel.name}`}>
                            <h1>{hotel.name}</h1>
                        </Link>
                        <p>{hotel.address1}</p>
                        <p>{hotel.address2}</p>
                    </div>

                    <div className="rating">
                        {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return(
                                    <FaStar key={i} size={25} color={ratingValue <= parseInt(hotel.starRating) ? "#ffc107" : "#e4e5e9"}/>
                                )
                            })
                        }
                    </div>
                </div>

                <h2 className="roomsTitle">Available Rooms</h2>

                <div className="hotelRooms">
                    <Room 
                        id={hotel.id}
                        adults={adults}
                        children={children}
                    />
                </div>
                
            </Card>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 4rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  min-height: 30rem;
  width: 50rem;
  border-radius: 3px; 
  overflow: hidden;
  position: relative;
  margin: 0 0 1.5rem 0;
  border: solid 1px black;
  

  .hotelsData {
    display: flex;
  }
  
  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }

  .rating {
    margin: 1rem 1rem 0 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  .roomsTitle {
      display: flex;
      width: 100%;
      justify-content: center;
  }

  .hotelRooms {
    height: 100%;
    max-height: 20rem;
    overflow-y: scroll;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SplideStyled = styled(Splide)`
  max-width: 15rem;
  margin: 1rem 1rem 0 1rem;
`;

export default Hotel;