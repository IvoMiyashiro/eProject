import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 4px;
  display: flex;
  gap: 0.5em;
`;

export const ImageWrapper = styled.section`
  border-radius: 4px;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 50px;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 1rem;
`;

export const P = styled.p`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.8rem;
`;

export const Role = styled.p`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.8rem;
  text-transform: capitalize;
`;

export const Section = styled.section``;
