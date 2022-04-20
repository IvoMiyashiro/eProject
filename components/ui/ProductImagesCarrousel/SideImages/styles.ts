import styled from 'styled-components';
import { bp } from 'styles';

interface Styles {
  isActive: boolean
}

export const ImageWrapper = styled.div<Styles>`
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${props => props.isActive ? props.theme.color_primary_2 : props.theme.color_neutral_0};
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 0.5em;
  width: 90px;

  @media (max-width: ${bp.mobile}) {
    height: 60px;
    padding: 0;
    width: 60px;
  }
`;

export const ImageContainer = styled.div`
  height: 450px;
  position: relative;
  width: 450px;

  @media (max-width: ${bp.mobile}) {
    height: 40px;
    width: 40px;
  }
`;
