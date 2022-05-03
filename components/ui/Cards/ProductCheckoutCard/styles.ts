import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  max-height: 100px;
  max-width: 100px;
  min-height: 100px;
  min-width: 100px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  max-height: 90px;
  max-width: 90px;
  min-height: 90px;
  min-width: 90px;
  position: relative;
`;

export const Wrapper = styled.div``;

export const H2 = styled.h2`
  font-size: 0.85rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${props => props.theme.color_ui_text_main};
  cursor: pointer;
  display: -webkit-box;
  max-width: 200px;
  overflow: hidden;
  
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  color: ${props => props.theme.color_ui_text_main};
  margin: 0.25em 0;
`;

export const P = styled.p`
  font-size: 0.8rem;
  font-family: 'Inter';
`;

export const Span = styled.span`
  font-size: 0.8rem;
  font-family: 'Inter';
`;
