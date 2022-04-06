import { FC } from "react";

//Materials
import Button from "@material-ui/core/Button"
import { MdArrowBackIos } from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

//Style
import styled from "styled-components";

//Interfaces
import RoomInterface from "../interfaces/RoomInterface";

type Props = {
    selectedRoom: any,
    selectedRatePlans: any,
}

const RoomDetails: FC<Props> = ({ selectedRoom, selectedRatePlans }) => {
    console.log(selectedRatePlans);
    return(
        <Wrapper>
            <BackBtn variant="outlined" startIcon={<MdArrowBackIos />} href="/">Home</BackBtn>

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

                    <div className="facilities">
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
                    </div>
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
    width: 100%;
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

        @media only screen
        and (min-width: 320px)
        and (max-width: 900px) {
            flex-direction: column;
            align-items: center;
        }

        .about {
            min-width: 35%;

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
                width: 49%;
                height: 3rem;
                background-color: #FFF;
                border-radius: 3px;
                overflow-y: scroll;
                padding: 3px;

                @media only screen
                and (min-width: 320)
                and (max-width: 480px) {
                    width: 32%;
                }

                @media only screen
                and (min-width: 481px)
                and (max-width: 768px) {
                    width: 32%;
                }

                @media only screen
                and (min-width: 769px)
                and (max-width: 900px) {
                    width: 24%;
                }
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
        padding: 5px;


        @media only screen
        and (min-width: 320)
        and (max-width: 480px) {
            flex-direction: column;
            align-items: center;
        }

        h3 {
            margin-bottom: .5rem;
        }

        &_item {
            width: 50%
            padding: .5rem;

            @media only screen
            and (min-width: 320)
            and (max-width: 480px) {
                width: 100%;
            }
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
    min-width: 63%;
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen
    and (min-width: 320px)
    and (max-width: 480px) {
        height: fit-content;
    }

    .splide__list {
        align-items: center;
    }
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

const BackBtn = styled(Button)`
    a& {
        display: flex;
        position: sticky;
        top: 30px;
        left: 30px;
        align-self: flex-start;
        z-index: 10;
        background-color: #ededed;
        box-shadow: 1px 1px 3px gray, -1px -1px 3px gray
        transition: all .1s ease-in;

        @media only screen
        and (min-width: 320px)
        and (max-width: 900px) {
            display: none;
        }
    }

    a&:hover {
        background-color: white;
    }
    
`;

export default RoomDetails;