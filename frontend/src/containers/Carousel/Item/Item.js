import React from "react";
import styled from "styled-components";
import "./Item.scss";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  cursor: pointer;
`;

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Item = ({ title, vote_average, poster_path, overview, id }) => {
  const history = useHistory();
  return (
    <StyledDiv onClick={() => history.push(`/detail/${id}`)}>
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
        }
        alt={title}
        width="450"
        height="350"
      />
    </StyledDiv>
  );
};

export default Item;
