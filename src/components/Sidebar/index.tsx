import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { formatMoney } from "../../utils/FormatMoney";

import ItemInfo from "./components/ItemInfo";
import ItemPrice from "./components/ItemPrice";
import ItemQuantity from "./components/ItemQuantity";
import { CartSidebarProps } from "../Types/sidebar";

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 320px;
  background-color: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

const CartTitle = styled.h2`
  margin-top: 0;
  font-family: "Montserrat", sans-serif;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  .remove-button {
    position: absolute;
    top: -10px;
    right: -10px;
    background: black;
    color: white;
    border: none;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: black;
    }
  }
`;

const TotalContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

const CheckoutButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;

  &:hover {
    background-color: #333;
  }
`;

const CartSidebar: React.FC<CartSidebarProps> = ({
  cartOpen,
  setCartOpen,
  cartItems,
  removeFromCart,
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <Sidebar
      initial={{ x: "100%" }}
      animate={{ x: cartOpen ? "0%" : "100%" }}
      transition={{ type: "tween" }}
    >
      <CloseButton onClick={() => setCartOpen(false)}>
        <FaTimes size={24} />
      </CloseButton>
      <CartTitle>Carrinho de compras</CartTitle>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <button
            className="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            <FaTimes size={12} />
          </button>
          <ItemInfo
            photo={item?.photo ?? ""}
            name={item?.name ?? ""}
            id={item.id}
            price={item.price}
            description={item.description}
          />
          <ItemQuantity
            quantity={quantities[item.id]}
            setQuantity={(newQuantity) =>
              handleQuantityChange(item.id, newQuantity)
            }
          />
          <ItemPrice
            price={item?.price ?? 0}
            quantity={quantities[item.id] || 1}
          />
        </CartItem>
      ))}
      <TotalContainer>
        <span>Total:</span>
        <span>{formatMoney(totalPrice)}</span>
      </TotalContainer>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </Sidebar>
  );
};

export default CartSidebar;
