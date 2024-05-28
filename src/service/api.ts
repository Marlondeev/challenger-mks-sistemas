import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
});

interface GetProductsParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  photo: string;
  description: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
}

export const getProducts = async ({
  page,
  rows,
  sortBy,
  orderBy,
}: GetProductsParams): Promise<ApiResponse> => {
  const response = await api.get("/products", {
    params: { page, rows, sortBy, orderBy },
  });
  return response.data;
};
