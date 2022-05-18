import styled from 'styled-components';

interface Styles {
  isActive: boolean
}

export const Div = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_ui_background};
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: 2em;
  padding: 0 1em;
`;

export const P = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.color_neutral_2};
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 1em;
  list-style: none;
`;
  
export const Li = styled.li`
  cursor: pointer;
  height: 20px;
`;

export const Span = styled.span<Styles>`
  background-color: ${props => props.isActive ? props.theme.color_primary_2 : 'transparent'};
  border-radius: 4px;
  color: ${props => props.isActive ? 'white' : props.theme.color_ui_text_main};
  padding: 0.25em 0.65em;
`;
