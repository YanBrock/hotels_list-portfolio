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
    hotelsImages: any;
}

const Header: FC<Props> = ({
    setRating,  
    rating, 
    setAdults, 
    adults, 
    setChildren, 
    children,
    selectedHotel,
    hotelsImages,
}) => {

    return(
        <Wrapper>
            {hotelsImages.map((url: string) => {
                return (
                    <img src={url} alt="Image" />
                )
            })}
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
    display: flex;
    height: 200px;
    background-color: black;
    position: relative;
    box-shadow: 0px 10px 20px gray;
    margin-bottom: 4rem;

    @media (max-width: 320px) {
        height: 100px;
    }

    img {
        width: 25%;
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }
`;

export default Header;