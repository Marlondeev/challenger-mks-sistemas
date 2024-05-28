import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RiShoppingBag3Line } from "react-icons/ri";
import { formatMoney } from "../../utils/FormatMoney";
import { ProductCardProps } from "../Types/product";

const Card = styled(motion.div)`
  border: 1px solid #eee;
  border-radius: 16px;
  text-align: center;
  width: 218px;
  height: 300px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImage = styled(motion.img)`
  width: 150px;
  height: 138px;
  object-fit: scale-down;
  margin: 0 auto;
`;

const ProductInfo = styled.div`
  text-align: left;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  font-family: "Montserrat", sans-serif;

  h2 {
    font-size: 0.85rem;
    margin: 6px 0;
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 0.75rem;
    color: #666;
    margin-bottom: 8px;
    width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const PriceTag = styled.div`
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  padding: 0.115rem;
  font-size: 16px;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: transparent;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <Card>
      <ProductImage
        src={product.photo}
        alt={product.name}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      />
      <ProductInfo>
        <h2>
          {product.name}
          <PriceTag>{formatMoney(product.price)}</PriceTag>
        </h2>
        <span title={product.description}>{product.description}</span>
      </ProductInfo>
      <ButtonContainer onClick={() => addToCart(product)}>
        <Button>
          <RiShoppingBag3Line />
          COMPRAR
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default ProductCard;
