import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
    id: string,
    adults: number,
    children: number,
}

interface Room {
    id: string,
    images: {url: string, alt: string,}[],
    name: string,
    occupancy: {maxAdults: number, maxChildren: number, maxOverall: number},
    longDescription: string,
}

const Room: FC<Props> = ( {id, adults, children} ) => {

    const [rooms, setRooms] = useState([]);
    const [ratePlans, setRatePlans] = useState([]);
    const [roomsByAdults, setRoomsByAdults] = useState([]);


    const getRooms = async () => {
        const api = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`);
        const data = await api.json();

        setRatePlans(data.ratePlans);
        console.log(ratePlans);

        setRooms(data.rooms);
        console.log(rooms);

        setRoomsByAdults(data.rooms);
    }

    const getFilteredRooms= async (adults: number, children: number) => {
        const filteredRooms = rooms.filter((el: Room) => {
          return (el.occupancy.maxAdults >= adults && el.occupancy.maxChildren >= children);
        });
        setRoomsByAdults(filteredRooms);
      }

    useEffect(() => {
        getFilteredRooms(adults, children);
    }, [adults, children]);

    useEffect(() => {
        getRooms();
    }, []);

    return(
        <Wrapper>
            {roomsByAdults.map((room: Room) => {
                return(
                    <div key={room.id} className="room">
                        
                        <div className="titles">
                            <h3>{room.name}</h3>
                            <p>Adults: {room.occupancy.maxAdults}</p>
                            <p>Children: {room.occupancy.maxChildren}</p>
                        </div>

                        <div className="description">
                            <p>{room.longDescription}</p>
                        </div>
                        
                    </div>
                )
            })}
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