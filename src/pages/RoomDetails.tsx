import styled from "styled-components";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react";

type Props = {
    selectedRoom: any,
    selectedRatePlans: any,
}

const RoomDetails: FC<Props> = ({ selectedRoom, selectedRatePlans }) => {
    // console.log(selectedRoom);
    console.log(selectedRatePlans);
    return(
        <Wrapper>
            <section className="roomTitle">
                <h1 className="title">
                    {selectedRoom.name}
                    <span
                        className="access"
                        style={{color: `${selectedRoom.disabledAccess ? "green" : "red"}`}}
                    >
                        {selectedRoom.disabledAccess? "available" : "unavailable"}
                    </span>
                </h1> 
            </section>

            <section className="gallery">
                <SplideStyled
                    options={{
                        perPage: 1,
                        arrows: selectedRoom.images.length > 1 ? true : false,
                        // pagination: false,
                        // drag: "free",
                        // gap: "5rem",
                    }}
                >
                    {selectedRoom.images.length === 0 ? <img src="../../assets/images/image-unexist.png" alt="Image not found." /> : selectedRoom.images.map((image: any) => {
                        return(
                            <SplideSlideStyled key={image.url}>
                                <img src={image.url} alt="Room Image" />
                            </SplideSlideStyled>
                        )
                    })}
                </SplideStyled>
                
                <div className="about">
                    <h3>About {selectedRoom.name}:</h3>
                    <div className="roomDescription">{selectedRoom.longDescription}</div>

                    <div className="roomData_occupancy">
                        <h3>Roominess:</h3>
                        <div className="item">Adults: {selectedRoom.occupancy.maxAdults}</div>
                        <div className="item">Children: {selectedRoom.occupancy.maxChildren}</div>
                    </div>
                

                    <div className="roomData_bedConfiguration">
                        <h3>Bed configyration:</h3>
                        <div className="item">{selectedRoom.bedConfiguration}</div>
                    </div>

                </div>

            </section>

            <section className="facilities">
                {selectedRoom.facilities.length !== 0 && (
                    <h3>Facilities:</h3>
                )}
                <div className="facilities_list">
                    {selectedRoom.facilities.map((item: any, i: number) => {
                        return(
                            <div className="item" key={i}>{item.code}</div>
                        )
                    })}
                </div>
            </section>

            {selectedRatePlans !== undefined && (
                <section className="ratePlan">
                    <div className="ratePlan_item">
                        <h3>Rate plan:</h3>
                        {selectedRatePlans.shortDescription !== undefined && (
                            <div>{selectedRatePlans.shortDescription};</div>
                        )}
                        {selectedRatePlans.longDescription !== undefined && (
                            <div><i>{selectedRatePlans.longDescription};</i></div>
                        )}
                        {selectedRatePlans.prePayment !== undefined && (
                            <div><b>Prepayment: </b>{selectedRatePlans.prePayment}.</div>
                        )}
                    </div>
                        
                    <div className="ratePlan_item">
                        {selectedRatePlans.cancellationPolicy.name !== undefined && (
                            <h3>{selectedRatePlans.cancellationPolicy.name}:</h3>
                        )}
                        {selectedRatePlans.cancellationPolicy.text !== undefined && (
                            <div>{selectedRatePlans.cancellationPolicy.text};</div>
                        )}
                        {selectedRatePlans.cancellationPolicy.applicable !== undefined && (
                            <div><b>Applicable: </b>{selectedRatePlans.cancellationPolicy.applicable};</div>
                        )}
                        {selectedRatePlans.cancellationPolicy.hour !== undefined && (
                            <div><b>Hours: </b>{selectedRatePlans.cancellationPolicy.hour};</div>
                        )}
                        {selectedRatePlans.cancellationPolicy.penalty !== undefined && (
                            <div><b>Penalty: </b>{selectedRatePlans.cancellationPolicy.penalty}.</div>
                        )}
                    </div>
                </section>
            )}
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .roomTitle {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;

        span {
            font-weight: 400;
            font-size: 1rem;
            margin-left: 1rem;
        }
    }

    .gallery {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;

        .about {
            width: 45%;

            & > div {
                margin-bottom: 10px;
            }
        }
    }

    .roomData {
        width: 100%;
        display: flex;
        margin-bottom: 2rem;

        &_occupancy {
            margin-right: 1rem;
        }
    }

    .facilities {
        width: 100%;
        margin-bottom: 2rem;

        h3 {
            margin-bottom: .5rem;
        }

        &_list {
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
            max-height: 15rem;
            overflow: scroll;

            .item {
                width: 24%;
                height: 3rem;
                // background-color: #9dc997;
                background-color: #FFF;
                border-radius: 3px;
                overflow-y: scroll;
                padding: 3px;
            }
        }
    }

    .ratePlan {
        display: flex;
        width: 100%;
        background-color: white;
        border: solid 1px #e6e6e6;
        border-radius: 3px;
        margin-bottom: 2rem;

        h3 {
            margin-bottom: .5rem;
        }

        &_item {
            max-width: 50%;
            padding: .5rem;
        }

        &_item:first-child {
            border-right: solid 1px #e6e6e6;
        }

        &_item > div {
            margin-bottom: 5px;
        }
    }    
`;

const SplideStyled = styled(Splide)`
    margin-bottom: 2rem;
    min-width: 50%;
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SplideSlideStyled = styled(SplideSlide)`
    display: flex;
    justify-contenr: center;
    align-items: center;
    width: 60rem;
    height: 30rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default RoomDetails;