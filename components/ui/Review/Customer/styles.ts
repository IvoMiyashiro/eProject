import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: 175px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 45px;
  min-height: 45px;
  max-width: 45px;
  max-height: 45px;
  border-radius: 50%;
`;

export const Wrapper = styled.div``;
  
export const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

export const Section = styled.section`
  display: flex;
  gap: 0.25em;
  margin-top: 0.25em;
`;

export const Span = styled.span`
  padding: 0.25em;
  width: 18px;
  height: 18px;
  background-color: ${props => props.theme.color_ui_ok_0};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
  
export const P = styled.p`
  font-size: 0.8rem;
`;
