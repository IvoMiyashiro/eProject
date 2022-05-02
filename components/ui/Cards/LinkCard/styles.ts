import styled from 'styled-components';

interface Styles {
  isHover: boolean;
}

export const Div = styled.div<Styles>`
  align-items: center;
  background-color: ${props => props.isHover ? props.theme.color_neutral_1 : 'transparent'};
  border-radius: 4px;
  display: flex;
  gap: 1em;
  height: 80px;
  padding: 0 2em;
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  transition: 0.2s;
  cursor: pointer;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-left: 2.5em;
  width: 100%;

  :nth-child(2) {
    margin-left: 0.5em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const IconWrapper = styled.div`
  background-color: ${props => props.theme.color_neutral_1};
  padding: 0.6em 0.7em;
  border-radius: 100%;
  color: ${props => props.theme.color_primary_0};
`;

export const Text = styled.p`
font-size: 0.8rem;
color: ${props => props.theme.color_neutral_2};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
