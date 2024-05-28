import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const HeaderContainer = styled.header`
  background-color: #007bff;
  padding: 10px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.div`
  position: relative;
  margin-right: 50px;
  cursor: pointer;
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <HeaderContainer>
      <h1>MKS Sistemas - Marlon</h1>
      <CartIcon onClick={onCartClick}>
        <FaShoppingCart size={24} />
        {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
      </CartIcon>
    </HeaderContainer>
  );
};

export default Header;
