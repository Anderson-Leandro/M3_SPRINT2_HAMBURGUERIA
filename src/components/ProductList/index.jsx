import { ProductCard } from "../ProductCard";
import { StyledProductList } from "./style";

export const ProductList = ({ products, addToCart }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        ></ProductCard>
      ))}
    </StyledProductList>
  );
};
