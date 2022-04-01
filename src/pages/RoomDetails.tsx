import { FC } from "react";

type Props = {
    selectedRoom: any,
}

const RoomDetails: FC<Props> = ({selectedRoom}) => {
    return(
        <div>{selectedRoom.name}</div>
    );
};

export default RoomDetails;