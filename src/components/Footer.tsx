import { FC } from "react";

//Materials
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer: FC = () => {
    return(
        <Wrapper>
            <span>&copy; YanBrock</span>
            <a href="https://github.com/YanBrock">
                <BsGithub size={25} />
            </a>

            <a href="https://www.linkedin.com/in/yan-barsukevich">
                <AiFillLinkedin size={25} />
            </a>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    background-color: #f2f2f2;
    box-shadow: 0px -10px 20px gray;

    span {
        font-size: 1.5rem;
        font-style: italic;
        font-weight: bold;
        margin-right: 1rem;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        margin-right: .5rem;
    }
`;

export default Footer;