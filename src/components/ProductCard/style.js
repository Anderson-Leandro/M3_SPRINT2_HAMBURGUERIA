import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: max-content;
  min-width: 15rem;
  max-width: 18.75rem;
  border: 0.125rem solid var(--color-grey-20);
  border-radius: 0.3125rem;
  margin-bottom: 0.625rem;

  figure {
    width: 100%;
    height: 12.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-0);
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.625rem 1.3125rem 0.9375rem 1.3125rem;
    gap: 0.875rem;
  }

  /* &:hover {
    transform: scale(1.1);
  } */
`;
