import styled from 'styled-components';

interface Styles {
  status: 'active' | 'inactive';
}

export const FirstTd = styled.td`
  align-items: center;
  border-top: 1px solid ${props => props.theme.color_neutral_1};
  display: flex;
  gap: 0.75em;
  min-width: 600px;
  padding: 0 1.2em;
`;

export const Menu = styled.menu`
  background-color: ${props => props.theme.color_ui_background};
  box-shadow:
    0px 0px 1.6px rgba(0, 0, 0, 0.011),
    0px 0px 3.8px rgba(0, 0, 0, 0.016),
    0px 0px 7.1px rgba(0, 0, 0, 0.02),
    0px 0px 12.7px rgba(0, 0, 0, 0.024),
    0px 0px 23.8px rgba(0, 0, 0, 0.029),
    0px 0px 57px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  bottom: -65px;
  left: -35px;
  margin: 0;
  padding: 0.5em 0;
  position: absolute;
  z-index: 10;
  text-align: left;
`;

export const Span = styled.span<Styles>`
  padding: 0.5em 0.75em;
  border-radius: 99px;
  font-size: 0.8rem;
  background-color: ${props => props.status === 'active' ? props.theme.color_ui_ok_0 : props.theme.color_ui_warn};
  color: #fff;
`;

export const Text = styled.td`
  display: inline-block;
  margin-right: 0.5em;
  font-family: 'Inter';
`;

export const IconButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 1em;
`;
