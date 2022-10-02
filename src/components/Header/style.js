import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-0);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
