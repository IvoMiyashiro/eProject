import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color_neutral_2};
`;
