import { FC, useState } from "react";

//Materials
import { FaStar } from "react-icons/fa";

//Styles
import styled from "styled-components"

type Props = {
  setRating: (arg: number) => void,
  rating: number,
}

const StarRating: FC<Props> = ({ setRating, rating }) => {

  const [hover, setHover] = useState<number>(0);

  return(
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return(
          <label key={i}>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <Stars
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(0)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

const Input = styled.input`
  display: none;
`;

const Stars = styled(FaStar)`
  cursor: pointer;
`;

export default StarRating;