import React from 'react';
import Button from "@material-ui/core/Button"

//Components
import StarRating from './StarRating';

//Styles
import styled from "styled-components"

type Props = {
  setRating: (arg: number) => void;
  setHover: (arg: number) => void;
  rating: number;
  hover: number;
  setAdults: (arg: number) => void;
  adults: number;
  setChildren: (arg: number) => void;
  children: number;
};

const Filter: React.FC<Props> = 
  ({
    setRating, 
    setHover, 
    rating, 
    hover, 
    setAdults, 
    adults, 
    setChildren, 
    children}) => {

  return (
    <Wrapper>
        <StarRating
          setRating={setRating}
          setHover={setHover}
          rating={rating}
          hover={hover}
        />

        <div className="adults">
          Adults
          <Button
            onClick={() => {
                if(adults > 0) {
                  setAdults(--adults)
                };
              }
            }
          >-</Button>
            {adults}
          <Button onClick={() => setAdults(++adults)}>+</Button>
        </div>

        <div className="children">
        Children
          <Button
            onClick={() => {
                if(children > 0) {
                  setChildren(--children)
                };
              }
            }
          >-</Button>
            {children}
          <Button onClick={() => setChildren(++children)}>+</Button>
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
  border: solid 1px black;
  border-radius: 3px;
  padding: .5rem
`;

export default Filter;