import { FC } from "react";

//Styles
import styled from "styled-components";

//Components
import Filter from "./Filter";

import HotelInterface from "../interfaces/HotelInterface"

type Props = {
    setRating: (arg: number) => void;
    rating: number;
    setAdults: (arg: number) => void;
    adults: number;
    setChildren: (arg: number) => void;
    children: number;
    selectedHotel: HotelInterface;
}

const Header: FC<Props> = ({
    setRating,  
    rating, 
    setAdults, 
    adults, 
    setChildren, 
    children,
    selectedHotel,
}) => {

    return(
        <Wrapper>
            {/* {selectedHotel.images.map((image) => {
                return (
                    <img src={image.url} alt="Image" />
                )
            })} */}
            <Filter
                setRating={setRating}
                rating={rating}
                setAdults={setAdults}
                adults={adults}
                setChildren={setChildren}
                children={children}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f2f2f2;
    position: relative;
    box-shadow: 0px 10px 20px gray;
    margin-bottom: 2rem;
`;

export default Header;