import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${props => props.theme.color_ui_background};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 450px;
  padding: 2em 1em;
  width: 450px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
  
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
  
export const Wrapper = styled.div``;
  
export const Checkbox = styled.input``;
  
export const Label = styled.label`
  align-items: center;
  display: flex;
  font-size: 0.9rem;
  gap: 0.25em;
`;
  
export const ButtonWrapper = styled.div`
  height: 57px;
  border-radius: 4px;
  overflow: hidden;
`;

export const H1 = styled.h1``;

export const A = styled.a`
  font-size: 0.9rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.9rem;
  gap: 0.25em;
  justify-content: center;
  margin-top: 0.5em;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  font-size: 0.9rem;
`;
