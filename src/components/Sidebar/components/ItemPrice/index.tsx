import React from "react";
import styled from "styled-components";
import { formatMoney } from "../../../../utils/FormatMoney";

interface ItemPriceProps {
  price: number;
  quantity: number;
}

const PriceContainer = styled.div`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

const ItemPrice: React.FC<ItemPriceProps> = ({ price, quantity }) => {
  const totalItemPrice = price * quantity;
  return <PriceContainer>{formatMoney(totalItemPrice)}</PriceContainer>;
};

export default ItemPrice;
