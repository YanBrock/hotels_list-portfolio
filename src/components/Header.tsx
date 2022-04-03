import { FC } from "react";

//Styles
import styled from "styled-components";

//Components
import Filter from "./Filter";

type Props = {
    setRating: (arg: number) => void;
    setHover: (arg: number) => void;
    rating: number;
    hover: number;
    setAdults: (arg: number) => void;
    adults: number;
    setChildren: (arg: number) => void;
    children: number;
}

const Header: FC<Props> = ({
    setRating, 
    setHover, 
    rating, 
    hover, 
    setAdults, 
    adults, 
    setChildren, 
    children,
}) => {

    return(
        <Wrapper>
            <Filter
                setRating={setRating}
                setHover={setHover}
                rating={rating}
                hover={hover}
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
    height: 200px;
    background-color: #f2f2f2;
    position: relative;
    box-shadow: 0px 10px 20px gray;
    margin-bottom: 2rem;
`;

export default Header;