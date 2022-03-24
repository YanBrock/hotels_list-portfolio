import { FC } from "react";

//Styles
import styled from "styled-components";

const Header: FC = () => {
    return(
        <Wrapper></Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f2f2f2;
    position: relative;
`;

export default Header;