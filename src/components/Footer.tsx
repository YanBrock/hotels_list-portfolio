import { FC } from "react";

//Materials
import styled from "styled-components";

const Footer: FC = () => {
    return(
        <Wrapper>Footer</Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #f2f2f2;
    box-shadow: 0px -10px 20px gray;
`;

export default Footer;