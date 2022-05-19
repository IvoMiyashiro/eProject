import styled from 'styled-components';

export const FirstTd = styled.td`
  align-items: center;
  border-top: 1px solid ${props => props.theme.color_neutral_1};
  display: flex;
  gap: 0.75em;
  min-width: 450px;
  padding: 0 1.2em;
`;

export const P = styled.p`
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
cursor: pointer;
display: -webkit-box;
font-size: 0.9rem;
overflow: hidden;
text-overflow: ellipsis;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  min-height: 80px;
  min-width: 80px;
  position: relative;
`;

export const LastTd = styled.td`
  border-top: 1px solid ${props => props.theme.color_neutral_1};
  gap: 0.75em;
  height: 100%;
  position: relative;
  text-align: center;
`;

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0.5em;

  :hover {
    background-color: ${props => props.theme.color_neutral_1};
  }
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
  bottom: -35px;
  left: -50px;
  margin: 0;
  padding: 0.5em 0;
  position: absolute;
  z-index: 10;
  text-align: left;
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

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  top: 0;
  height: 100vh;
`;
