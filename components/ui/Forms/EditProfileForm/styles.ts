import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  background-color: ${props => props.theme.color_ui_background};
  padding: 2em;
  border-radius: 8px;
`;

export const H2 = styled.h2`
  margin-bottom: 0.5em;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25em;
`;

export const ButtonWrapper = styled.div`
  width: 150px;
  height: 35px;
  margin-left: auto;
  margin-top: 2em;
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.color_neutral_2};
  margin-bottom: 1.25em;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;

export const Section = styled.section`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
`;
