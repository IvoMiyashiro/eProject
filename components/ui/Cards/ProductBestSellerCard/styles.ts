import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 0.75em;
`;

export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  height: 60px;
  position: relative;
  width: 60px;
`;

export const Section = styled.section``;

export const H3 = styled.h3`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  display: -webkit-box;
  font-size: 0.9rem;
  font-weight: 600;
  overflow: hidden;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  color: ${props => props.theme.color_neutral_2};
  font-size: 0.8rem;
  margin-top: 0.25em;
`;
