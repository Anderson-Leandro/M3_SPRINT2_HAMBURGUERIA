import { StyledProductCard } from "./style";

import {
  StyledBody,
  StyledCaption,
  StyledTitle3,
} from "../styles/components/typography";
import { StyledButtonMedium } from "../styles/components/buttons";

export const ProductCard = ({ product, addToCart }) => {
  return (
    <StyledProductCard>
      <figure>
        <img src={product.img} alt="" />
      </figure>

      <div>
        <StyledTitle3 color="--color-grey-100">{product.name}</StyledTitle3>

        <StyledCaption color="--color-grey-50">
          {product.category}
        </StyledCaption>

        <StyledBody color="--color-primary">
          R$ {product.price.toFixed(2)}
        </StyledBody>

        <StyledButtonMedium
          color="--color-primary"
          onClick={() => addToCart(product)}
        >
          Adicionar
        </StyledButtonMedium>
      </div>
    </StyledProductCard>
  );
};
