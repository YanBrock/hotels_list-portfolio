import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
    id: string,
    name: string,
    occupancy: {maxAdults: number, maxChildren: number},
    longDescription: string,
    // roomsByOccupancy: any,
}

interface Room {
    id: string,
    images?: {url: string, alt: string,}[],
    name: string,
    occupancy: {maxAdults: number, maxChildren: number, maxOverall: number},
    longDescription: string,
}

const Room: FC<Props> = ( {id, name, occupancy, longDescription} ) => {

    return(
        <Wrapper>
            
            <div key={id} className="room">
                
                <div className="titles">
                    <h3>{name}</h3>
                    <p>Adults: {occupancy.maxAdults}</p>
                    <p>Children: {occupancy.maxChildren}</p>
                </div>

                <div className="description">
                    <p>{longDescription}</p>
                </div>
                
            </div>
                
        </Wrapper>
    );
};

const Wrapper = styled.div`

    .room {
        display: flex;
        border: solid 1px black;
        margin: 1rem 1rem;
        padding: .5rem;
        height: 8rem;

        .titles {
            width: 30%;
        }
    
        .description {
            width: 70%;
            max-height: 10rem;
            overflow-y: scroll;
        }
    }
`;

const SplideStyled = styled(Splide)`
//   max-width: 15rem;
//   margin: 1rem 1rem 0 1rem;
`;

export default Room;