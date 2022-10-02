import { StyledHeader } from "./style";
import logo from "../../assets/img/logo.png";
import { SearchInput } from "../SearchInput";
import { Container } from "../Container/Container";

export const Header = ({ products, setFilteredProducts }) => {
  return (
    <StyledHeader>
      <Container>
        <figure>
          <img src={logo} alt="" />
        </figure>

        <SearchInput
          products={products}
          setFilteredProducts={setFilteredProducts}
        ></SearchInput>
      </Container>
    </StyledHeader>
  );
};
