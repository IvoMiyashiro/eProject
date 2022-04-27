import styled from 'styled-components';

interface Style {
  type: 'visa' | 'master' | '';
  isCvcFocus?: boolean;
}

export const Div = styled.div<Style>`
  background-color: ${
  props => ((props.type === '')
    ? props.theme.color_neutral_1
    : (props.type === 'master')
      ? '#435D6F'
      : (props.type === 'visa')
        ? '#384CA7'
        : '#86A99B')
};
  border-radius: 8px;
  height: 150px;
  position: relative;
  transition: 0.4s;
  width: 306px;
  transform-style: preserve-3d;
  ${props => props.isCvcFocus ? 'transform: rotateY(180deg)' : ''};
`;

export const Wrapper = styled.div`
  position: relative;

  :nth-child(2) {
    margin-top: 1em;
  }

  :nth-child(2),
  :nth-child(3) {
    display: flex;
    height: 35px;
    justify-content: space-between;
    padding: 0 1em;
  }
`;

export const P = styled.p`
  color: ${props => props.theme.color_ui_background};
  font-family: 'Inter';
  font-size: 0.9rem;
`;

export const Span = styled.span<Style>`
  color: ${props => props.type === '' ? props.theme.color_ui_text_main : props.theme.color_ui_background};
  font-family: 'Inter';
  font-size: 1rem;
  letter-spacing: 0.1em;
`;

const commun = `
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const Front = styled.div`
  ${commun};
`;

export const Back = styled.div`
  ${commun};
  overflow: hidden;
  transform: rotateY(180deg);
`;

export const Bar = styled.div`
  background-color: ${props => props.theme.color_ui_text_main};
  height: 40px;
  margin-top: 1.25em;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1em;
  padding: 0 0.75em;
  width: 100%;
`;

export const LineWrapper = styled.div`
  width: 100%;
`;

export const Line = styled.div<Style>`
  background-color: ${props => props.type !== '' ? props.theme.color_ui_text_contrast : props.theme.color_neutral_2};
  height: 2px;
  margin-top: 0.1em;
  width: 100%;
`;

export const CVCWrapper = styled.div<Style>`
  align-items: center;
  background-color: ${props => props.type !== '' ? props.theme.color_ui_text_contrast : props.theme.color_neutral_2};
  display: flex;
  height: 30px;
  justify-content: center;
  width: 70px;
  font-family: 'Inter';
`;
