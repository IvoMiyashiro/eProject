import styled from 'styled-components';

export const Section = styled.section`
  max-width: 250px;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color_primary_2 + '1C'};
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.color_primary_0};
  padding: 0.5em;
  width: 100px;
`;

export const Span = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.color_primary_2};

  :hover {
    text-decoration: underline;
  }
`;
