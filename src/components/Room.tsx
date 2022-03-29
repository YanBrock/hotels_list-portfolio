import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
    id: string,
}

interface Room {
    id: string,
    images: {url: string, alt: string,}[],
    name: string,
    longDescription: string,
}

const Room: FC<Props> = ( {id} ) => {

    const [rooms, setRooms] = useState([]);
    const [ratePlans, setRatePlans] = useState([]);

    const getRooms = async () => {
        const api = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`);
        const data = await api.json();
        console.log(data);
        setRatePlans(data.ratePlans);
        setRooms(data.rooms);
    }

    useEffect(() => {
        getRooms();
    }, []);

    return(
        <Wrapper>
            {rooms.map((room: Room) => {
                return(
                    <div key={room.id} className="room">
                        
                        <div className="titles">
                            <h3>{room.name}</h3>
                            <p>{room.longDescription}</p>
                        </div>

                        <div className="images">
                            <SplideStyled
                                options={{
                                    perPage: 3,
                                    arrows: false,
                                    pagination: false,
                                }}
                            >
                            {room.images.map((image) => {
                                return(
                                    <SplideSlide>
                                        <img src={image.url} alt={image.alt} />
                                    </SplideSlide>
                                )
                            })}
                            </SplideStyled>
                        </div>
                        
                    </div>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`

    .room {
        // display: flex;
        border: solid 1px black;
        margin: 1rem 1rem;
        padding: .5rem;
    }

    .titles {
        display: flex;
        flex-direction: column;
    }
`;

const SplideStyled = styled(Splide)`
//   max-width: 15rem;
//   margin: 1rem 1rem 0 1rem;
`;

export default Room;