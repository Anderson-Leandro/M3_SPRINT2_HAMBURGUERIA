import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  max-width: 23.9375rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  height: 85px;

  figure {
    min-width: 80px;
    max-width: 80px;
    background-color: var(--color-grey-20);
    object-fit: cover;
    border-radius: 0.3125rem;

    img {
      width: 9.375rem;
    }
  }

  .descContainer {
    display: flex;
    margin-left: 1rem;
    gap: 0.875rem;
    height: 100%;
    width: 100%;
    justify-content: space-between;

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem 0;
    }

    button {
      border: none;
      font-weight: 500;
      font-size: 0.625rem;
      line-height: 0.75rem;
      color: var(--color-grey-50);

      &:hover {
        color: var(--color-grey-100);
        text-decoration: underline;
      }
    }
  }
`;
