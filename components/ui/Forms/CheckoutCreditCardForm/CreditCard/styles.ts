import styled from 'styled-components';

interface Style {
  type: 'visa' | 'master' | 'american' | '';
}

export const Div = styled.div<Style>`
  height: 150px;
  width: 306px;
  background-color: ${
  props => ((props.type === '')
    ? props.theme.color_neutral_1
    : (props.type === 'master')
      ? '#435D6F'
      : (props.type === 'visa')
        ? '#384CA7'
        : '#86A99B')
};
  border-radius: 4px;
  padding: 1em;
  transition: 0.4s;
`;

export const Wrapper = styled.div`
  position: relative;

  :nth-child(2) {
    height: 25px;
  }

  :nth-child(4) {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
  }
`;

export const LogoWrapper = styled.div`
  height: 50px;
`;

export const VisaWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: -5px;
`;

export const MasterWrapper = styled.div`
  position: absolute;
  top: -7px;
  left: 0px;
`;

export const AmericanWrapper = styled.div``;

export const LogoPlaceholderWrapper = styled.div``;

export const LogoPlaceholder = styled.div`
  width: 60px;
  height: 40px;
  background-color: ${props => props.theme.color_neutral_0};
`;

export const P = styled.p`
  font-size: 0.9rem;
  font-family: 'Inter';
  color: ${props => props.theme.color_ui_background};
`;

export const Span = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.color_ui_background};
  font-family: 'Inter';
  letter-spacing: 0.1em;
`;
