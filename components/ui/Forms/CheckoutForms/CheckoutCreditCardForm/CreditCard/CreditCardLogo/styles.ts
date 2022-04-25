import styled from 'styled-components';

export const Div = styled.div`
  height: 65px;
`;

export const VisaWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: -5px;
  padding-top: 0.75em;
  padding-left: 0.75em;
`;

export const MasterWrapper = styled.div`
  position: absolute;
  top: -7px;
  left: 0px;
  padding-top: 0.75em;
  padding-left: 0.75em;
`;

export const AmericanWrapper = styled.div``;

export const LogoPlaceholderWrapper = styled.div`
  padding-top: 1em;
  padding-left: 1em;
`;

export const LogoPlaceholder = styled.div`
  width: 60px;
  height: 40px;
  background-color: ${props => props.theme.color_neutral_0};
`;
