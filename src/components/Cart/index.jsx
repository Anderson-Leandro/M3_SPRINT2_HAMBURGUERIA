import { CartProduct } from "../CartProduct";
import { StyledButtonDefault } from "../styles/components/buttons";
import {
  StyledBody,
  StyledBody600,
  StyledHeadline,
  StyledTitle3,
} from "../styles/components/typography";
import { StyledProductCart } from "./style";

export const Cart = ({ currentSale, removeFromCart, cleanCart, cartTotal }) => {
  return (
    <StyledProductCart>
      <div className="title">
        <StyledTitle3 color="--color-white">Carrinho de compras</StyledTitle3>
      </div>

      <div className="container">
        {cartTotal > 0 ? (
          <>
            <ul>
              {currentSale.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ul>

            <div className="total">
              <StyledHeadline color="--color-grey-100">Total</StyledHeadline>

              <StyledBody600 color="--color-grey-50">
                R$ {cartTotal}
              </StyledBody600>

              <StyledButtonDefault onClick={() => cleanCart()}>
                Remover Todos
              </StyledButtonDefault>
            </div>
          </>
        ) : (
          <div className="empty">
            <StyledTitle3 color="--color-grey-100">
              Sua sacola está vazia
            </StyledTitle3>

            <StyledBody color="--color-grey-50">Adicione itens</StyledBody>
          </div>
        )}
      </div>
    </StyledProductCart>
  );
};
