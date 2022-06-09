import styled from 'styled-components';

interface Styles {
  isOpen: boolean;
}
  
export const Closer = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  position: relative;
  z-index: 1;
`;

export const InputWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_neutral_1};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color_neutral_0};
  cursor: pointer;
  display: flex;
  height: 39px;
  justify-content: center;
  min-width: 80px;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 0.35em;
  height: 100%;
  margin-bottom: -0.2em;
`;

export const Section = styled.section`
  border-left: 1px solid ${props => props.theme.color_neutral_0};
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color_ui_background};
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 0.95rem;
  font-family: 'Inter';
`;

export const Ul = styled.ul<Styles>`
  -webkit-touch-callout: none; 
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 4px;
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  display: ${props => props.isOpen ? 'block' : 'none'};
  list-style: none;
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  z-index: 1;
  padding: 0.25em 0;
  user-select: none;
`;

export const Li = styled.li`
  cursor: pointer;
  font-family: 'Inter';
  font-size: 0.85rem;
  height: 30px;
  padding: 0.5em 1em;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.color_neutral_1};
  }
`;
