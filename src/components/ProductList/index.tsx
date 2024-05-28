import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getProducts } from "../../service/api";
import ProductCard from "../ProductCard/intex";
import Skeleton from "../Skeleton";
import { Product } from "../Types/product";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ProductListWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const ProductList: React.FC<{ addToCart: (product: Product) => void }> = ({
  addToCart,
}) => {
  const page = 1;
  const rows = 8;
  const sortBy = "name";
  const orderBy = "DESC";

  const { data, isLoading, error } = useQuery(["products", page], () =>
    getProducts({ page, rows, sortBy, orderBy })
  );

  if (isLoading) return <Skeleton />;
  if (error) return <p>Nenhum produto encontrado....</p>;

  if (!data || !Array.isArray(data.products))
    return <p>No products available</p>;

  return (
    <Container>
      <ProductListWrapper>
        <ProductListContainer>
          {data.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ProductListContainer>
      </ProductListWrapper>
    </Container>
  );
};

export default ProductList;
