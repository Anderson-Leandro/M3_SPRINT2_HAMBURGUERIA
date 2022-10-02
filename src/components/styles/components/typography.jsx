import styled from "styled-components";

export const StyledTitle1 = styled.h1`
  font-size: 1.625rem;
  line-height: 2.125rem;
  font-weight: 700;
  color: var(${(props) => props.color});
`;

export const StyledTitle2 = styled.h2`
  font-size: 1.375rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: var(${(props) => props.color});
`;

export const StyledTitle3 = styled.h3`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: var(${(props) => props.color});
`;

export const StyledTitle4 = styled.h4`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: var(${(props) => props.color});
`;

// texts

export const StyledHeadline = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(${(props) => props.color});
`;

export const StyledBody = styled.span`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(${(props) => props.color});
`;

export const StyledBody600 = styled(StyledBody)`
  font-weight: 600;
`;

export const StyledCaption = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: var(${(props) => props.color});
`;
