import { StyledCartProduct } from "./style";

import { StyledCaption, StyledTitle4 } from "../styles/components/typography";

export const CartProduct = ({ product, removeFromCart }) => {
  return (
    <StyledCartProduct>
      <figure>
        <img src={product.img} alt="" />
      </figure>

      <div className="descContainer">
        <div>
          <StyledTitle4 color="--color-grey-100">{product.name}</StyledTitle4>

          <StyledCaption color="--color-grey-50">
            {product.category}
          </StyledCaption>
        </div>

        <div>
          <button onClick={() => removeFromCart(product)}>Remover</button>

          <StyledCaption color="--color-grey-100">
            x{product.count}
          </StyledCaption>
        </div>
      </div>
    </StyledCartProduct>
  );
};
