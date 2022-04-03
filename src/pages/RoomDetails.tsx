import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react";

type Props = {
    selectedRoom: any,
}

const RoomDetails: FC<Props> = ({selectedRoom}) => {
    console.log(selectedRoom);
    return(
        <div>
            <div className="roomTitle">
                <h1 className="title">{selectedRoom.name}</h1> 
                <p className="access" color={selectedRoom.disabledAccess? "#fc0703" : "#2cfc03"}>{selectedRoom.disabledAccess? "unavailable" : "available"}</p>
            </div>

            <Splide
                options={{
                    perPage: 1,
                    // arrows: false,
                    // pagination: false,
                    // drag: "free",
                    // gap: "5rem",
                }}
            >
                {selectedRoom.images.map((image: any) => {
                    return(
                        <SplideSlide key={image.url}>
                            <img src={image.url} alt="Room Image" />
                        </SplideSlide>
                    )
                })}
            </Splide>

            <div className="roomData">
                <h3>About {selectedRoom.name}:</h3>
                <div className="roomDescription">{selectedRoom.longDescription}</div>

                <h3>Roominess:</h3>
                <div className="occupancy">Adults: {selectedRoom.occupancy.maxAdults}</div>
                <div className="occupancy">Children: {selectedRoom.occupancy.maxChildren}</div>

                <h3>Bed configyration:</h3>
                <div className="bedConfiguration">{selectedRoom.bedConfiguration}</div>

                <h3>Facilities:</h3>
                <div className="facilities">
                    {selectedRoom.facilities.map((item: any, i: number) => {
                        return(
                            <div className="item" key={i}>{item.code}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;