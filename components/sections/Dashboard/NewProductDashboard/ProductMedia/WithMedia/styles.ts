import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  position: relative;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 100%;
  gap: 1em;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color_primary_2 + '1C'};
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.color_primary_0};
  padding: 0.5em;
  width: 50px;
`;

export const Wrapper = styled.div`
  align-items: center;
  border-radius: 8px;
  border: 2px dashed ${props => props.theme.color_neutral_0};
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: center;
  width: 150px;
`;

export const HoverBox = styled.div`
  align-items: center;
  background-color: #EDEFFB;
  border-radius: 12px;
  border: 2px dashed ${props => props.theme.color_primary_0};
  color: ${props => props.theme.color_primary_0};
  display: flex;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;
