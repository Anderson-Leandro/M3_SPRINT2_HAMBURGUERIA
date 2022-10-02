import styled, { css } from "styled-components";

export const StyledButtonDefault = styled.button`
  padding: 1.25rem;
  border-radius: 0.5rem;
  max-width: 6.625rem;

  ${({ color }) => {
    if (color === "--color-primary") {
      return css`
        color: white;
        background: var(--color-primary);
        border: 0.125rem solid var(--color-primary);

        &:hover {
          background-color: var(--color-primary-50);
          border-color: var(--color-primary-50);
        }
      `;
    } else {
      return css`
        color: var(--color-grey-50);
        background: var(--color-grey-20);
        border: 0.125rem solid var(--color-grey-20);

        &:hover {
          color: var(--color-grey-20);
          background-color: var(--color-grey-50);
          border-color: var(--color-grey-50);
        }
      `;
    }
  }}
`;

export const StyledButtonMedium = styled(StyledButtonDefault)`
  padding: 0.63rem 1.25rem;
`;
