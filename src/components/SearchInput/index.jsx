import { useState } from "react";
import { StyledButtonMedium } from "../styles/components/buttons";
import { StyledInput } from "../styles/components/inputs";
import { StyledSearchInput } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SearchInput = ({ products, setFilteredProducts }) => {
  const [search, setSearch] = useState("");

  const errorToast = () => toast.error("Nenhum produto encontrado");

  function productsFiltered(search) {
    const newProducts = products.filter((prod) => {
      return prod.name.toLowerCase().includes(search.toString().toLowerCase());
    });

    if (newProducts.length === 0) {
      errorToast();
    }

    setFilteredProducts(newProducts);
  }

  return (
    <StyledSearchInput onSubmit={(event) => event.preventDefault()}>
      <StyledInput
        placeholder="Digitar Pesquisa"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></StyledInput>

      <StyledButtonMedium
        onClick={() => productsFiltered(search)}
        color="--color-primary"
      >
        Pesquisar
      </StyledButtonMedium>
      <ToastContainer autoClose={2000} />
    </StyledSearchInput>
  );
};
