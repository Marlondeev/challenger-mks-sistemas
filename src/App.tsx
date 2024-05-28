import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/Sidebar";
import { Product } from "./components/Types/product";

const AppContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <AppContainer>
      <Header cartItemCount={cartItems.length} onCartClick={toggleCart} />
      <MainContent>
        <ProductList addToCart={addToCart} />
      </MainContent>
      <CartSidebar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </AppContainer>
  );
};

export default App;
