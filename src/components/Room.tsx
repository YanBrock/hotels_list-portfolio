import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
    id: string,
    name: string,
    occupancy: {maxAdults: number, maxChildren: number},
    longDescription: string,
    disabledAccess: boolean,
    selectedRatePlans: any,
}


const Room: FC<Props> = ( {id, name, occupancy, longDescription, disabledAccess, selectedRatePlans} ) => {
console.log(selectedRatePlans);

    return(
        <Wrapper>
            {/* <div>
                 rate plan ID: {selectedRatePlans.id}
            </div> */}

            <div
                className="availability"
                style={{color: `${disabledAccess ? "green" : "red"}`}}
            >
                {disabledAccess ? "available" : "unavailable"}
            </div>

            <div
                key={id}
                className="room"
                style={{background: `${disabledAccess ? "#97d179" : "#faacac"}`}}
            >
                
                <div className="titles">
                    <h3>{name}</h3>
                    <p className="adults">Adults: {occupancy.maxAdults}</p>
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
    position: relative;

    .availability {
        position: absolute;
        top: .5rem;
        right: .5rem;
    }

    .room {
        display: flex;
        padding: .5rem;
        height: 8rem;
        border-radius: 3px;
        margin-bottom: 1rem;

        &:hover{
            box-shadow: 0px 3px 10px gray;
        }

        .titles {
            width: 30%;

            h3 {
                margin-bottom: .5rem;
            }
    
            p.adults{
                margin-bottom: .5rem;
            }
        }
    
        .description {
            width: 60%;
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