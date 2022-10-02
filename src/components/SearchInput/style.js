import styled from "styled-components";

export const StyledSearchInput = styled.form`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    bottom: 0.625rem;
  }

  @media (min-width: 800px) {
    max-width: 22.8125rem;
  }
`;
