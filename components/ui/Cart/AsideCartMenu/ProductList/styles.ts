import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background-color: ${props => props.theme.color_ui_background};
  bottom: 0;
  margin-top: auto;
  min-height: 190px;
  padding-top: 1.25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: scroll;
  padding: 1em;
  height: 100%;
  padding-top: 75px;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  padding: 0 1em;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;

  :nth-child(2) {
    color: ${props => props.theme.color_primary_2}
  }
`;

export const H3 = styled.h2`
  /* font-family: 'Inter'; */
  font-size: 1.15rem;
  font-weight: 600;
`;

export const P = styled.p`
 font-family: 'Inter';
 font-size: 0.9rem;
`;

export const A = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_primary_0};
  color: ${props => props.theme.color_ui_text_contrast};
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  justify-content: center;
  padding: 0.75em 0;
  width: 100%;
  min-height: 63px;
  margin-top: 1em;
`;
