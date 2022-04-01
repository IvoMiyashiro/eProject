import styled from 'styled-components';

export const Wrapper = styled.div``;
  
export const H1 = styled.div`
  height: 1.05rem;
  width: 100px;
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 4px;
`;

export const Section = styled.section`
  margin-top: 0.75em;
`;
  
export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
  height: 1rem;
  margin-top: 0.85em;
  width: 100%;
`;

export const Checkbox = styled.div`
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 4px;
  height: 14px;
  width: 14px;
`;
  
export const Label = styled.div`
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 4px;
  height: 0.8rem;
  width: 100%;
`;
