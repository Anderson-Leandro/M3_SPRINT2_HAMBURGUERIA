import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1300px;

  @media (min-width: 930px) {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`;
