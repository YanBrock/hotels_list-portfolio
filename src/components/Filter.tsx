import { FC } from 'react';

//Materials
import Button from "@material-ui/core/Button"

//Components
import StarRating from './StarRating';

//Styles
import styled from "styled-components"

type Props = {
  setRating: (arg: number) => void;
  rating: number;
  setAdults: (arg: number) => void;
  adults: number;
  setChildren: (arg: number) => void;
  children: number;
};

const Filter: FC<Props> = 
  ({
    setRating, 
    rating,
    setAdults, 
    adults, 
    setChildren, 
    children,
  }) => {


  return (
    <Wrapper>
        <StarRating
          setRating={setRating}
          rating={rating}
        />

        <div className="adults">
          <span>Adults</span>
          <Button className="minus" onClick={ () => adults > 0 ? setAdults(--adults) : null }>-</Button>
          <span>{adults}</span>
          <Button className="plus" onClick={ () => setAdults(++adults) }>+</Button>
        </div>

        <div className="children">
          <span>Children</span>
          <Button onClick={ () => children > 0 ? setChildren(--children) : null }>-</Button>
          <span>{children}</span>
          <Button onClick={ () => setChildren(++children) }>+</Button>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  background-color: #FFF;
  padding: .5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  
  @media only screen
  and (min-width: 320px)
  and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    border-radius: 0;
  }
`;

export default Filter;