import React from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const QuantityCol = styled.div`
  background-color: #ffffff;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  > span {
    font-weight: 400;
    font-size: 15px;
    color: #000000;
    display: flex;
    align-self: flex-start;
    margin-bottom: 4px;
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const QuantityInput = styled.div`
  background-color: #ffffff;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  border: 0.3px solid #bfbfbf;

  span {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
  }

  button {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #ffffff;
  }

  button:first-child {
    border-right: 0.3px solid #bfbfbf;
    height: 11px;
    cursor: pointer;
  }

  button:last-child {
    border-left: 0.3px solid #bfbfbf;
    height: 11px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;

    span {
      font-size: 24px;
    }
    button:first-child {
      height: 20px;
      font-size: 24px;
    }

    button:last-child {
      height: 20px;
      font-size: 24px;
    }
  }
`;

const ItemQuantity = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (value: number) => void;
}) => {
  return (
    <QuantityContainer>
      <QuantityCol>
        <span>Qtd</span>
        <QuantityInput>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QuantityInput>
      </QuantityCol>
    </QuantityContainer>
  );
};

export default ItemQuantity;
