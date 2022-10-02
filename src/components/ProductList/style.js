import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  margin-right: -1rem;
  overflow-y: auto;
  padding: 1rem 1rem 1rem 0;
  gap: 1.875rem;

  @media (min-width: 930px) {
    margin: 0;
    overflow: unset;
    flex-wrap: wrap;
    padding: 0;
  }
`;
