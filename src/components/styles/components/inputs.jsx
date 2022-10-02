import styled from "styled-components";

export const StyledInput = styled.input`
  height: 3.75rem;
  padding: 1.3rem 0rem 1.3rem 1.25rem;
  border: 0.125rem solid var(--color-grey-20);
  border-radius: 0.5rem;
  width: 100%;

  &::placeholder {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: var(--color-grey-20);
  }

  &:focus {
    border-color: var(--color-grey-100);

    &::placeholder {
      color: var(--color-grey-50);
    }
  }
`;
