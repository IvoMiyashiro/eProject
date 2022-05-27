import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  gap: 0.5em;
  border: 1px solid ${props => props.theme.color_neutral_1};
  border-radius: 4px;
  padding: 0.5em;
`;

export const Section = styled.section``;

export const Wrapper = styled.section`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
`;

export const H2 = styled.h2`
  font-size: 1.15rem;
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: ${prosp => prosp.theme.color_neutral_2};
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  padding: 0.5em 1.5em;
  cursor: pointer;
  font-size: 0.9rem;

  :hover {
    background-color: ${props => props.theme.color_neutral_1};
  }
`;
