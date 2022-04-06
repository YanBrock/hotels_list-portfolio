import { FC } from "react";

//Styles
import styled from "styled-components";

type Props = {
    id: string,
    name: string,
    occupancy: {maxAdults: number, maxChildren: number},
    longDescription: string,
    disabledAccess: boolean,
}

const Room: FC<Props> = ( {id, name, occupancy, longDescription, disabledAccess} ) => {

    return(
        <Wrapper>

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
                    <div>
                        <p className="adults">Adults: {occupancy.maxAdults}</p>
                        <p>Children: {occupancy.maxChildren}</p>
                    </div>
                    
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

        @media only screen
        and (min-width: 320px)
        and (max-width: 900px) {
            position: initial;
        }
    }

    .room {
        display: flex;
        padding: .5rem;
        height: 8rem;
        border-radius: 3px;
        margin-bottom: 1rem;
        transition: all .1s ease-in;

        @media only screen
        and (min-width: 320px)
        and (max-width: 900px) {
            flex-direction: column;
            align-items: center;

            .titles {
                width: 100%;
                display: flex;
            }

            .description {
                width: 100%;
            }
        }

        &:hover{
            box-shadow: 0px 3px 10px gray;
        }

        .titles {
            width: 30%;

            @media only screen
            and (min-width: 320px)
            and (max-width: 900px) {
                width: 100%;
                display: flex;
                margin: 0 0 .5rem 0;
            }

            h3 {
                margin: 0 0 .5rem 0;

                @media only screen
                and (min-width: 320px)
                and (max-width: 900px) {
                    margin: 0 .5rem 0 0;
                }
            }
    
            p.adults{
                margin-bottom: .5rem;
            }
        }
    
        .description {
            width: 60%;
            max-height: 10rem;
            overflow-y: scroll;

            @media only screen
            and (min-width: 320px)
            and (max-width: 900px) {
                width: 100%;
                display: flex;
                align-self: flex-start;
            }
        }
    }
`;

export default Room;