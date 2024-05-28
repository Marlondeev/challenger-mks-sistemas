import React from "react";
import styled from "styled-components";
import { Product } from "../../../Types/product";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  h4 {
    margin: 0;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
`;

const ItemInfo = ({ photo, name }: Product) => {
  return (
    <InfoContainer>
      <img src={photo} alt={name} />
      <h4>{name}</h4>
    </InfoContainer>
  );
};

export default ItemInfo;
