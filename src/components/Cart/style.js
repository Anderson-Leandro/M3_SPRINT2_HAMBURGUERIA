import styled from "styled-components";

export const StyledProductCart = styled.div`
  max-width: 25rem;
  margin: 0 auto;
  background-color: var(--color-grey-0);
  height: fit-content;

  .title {
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    height: 4.0625rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    background-color: var(--color-primary);
  }

  .container {
    padding: 1.25rem 1.125rem;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background-color: var(--color-grey-0);
  }

  .total {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: var(--color-grey-0);
    margin-top: 1.25rem;
    border-top: 0.125rem solid var(--color-grey-20);
    padding-top: 1.25rem;

    button {
      width: 100%;
      max-width: 100%;
      margin-top: 1.25rem;
    }
  }

  .empty {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  @media (min-width: 930px) {
    min-width: 22.8125rem;
    max-width: 22.8125rem;
    max-height: 50rem;

    ul {
      max-height: 31.25rem;
      overflow-y: auto;
    }
  }
`;
