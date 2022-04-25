import styled from 'styled-components';

interface Style {
  type: 'visa' | 'master' | 'american' | '';
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
    height: 25px;
  }

  :nth-child(3) {
    padding-left: 1em;
  }

  :nth-child(4) {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
    height: 25px;
    padding: 0 1em;
  }
`;

export const P = styled.p`
  font-size: 0.9rem;
  font-family: 'Inter';
  color: ${props => props.theme.color_ui_background};
`;

export const Span = styled.span<Style>`
  font-size: 1rem;
  color: ${props => props.type === '' ? props.theme.color_ui_text_main : props.theme.color_ui_background};
  font-family: 'Inter';
  letter-spacing: 0.1em;
`;

const commun = `
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Front = styled.div`
  ${commun};
`;

export const Back = styled.div`
  ${commun};
  transform: rotateY(180deg);
`;
