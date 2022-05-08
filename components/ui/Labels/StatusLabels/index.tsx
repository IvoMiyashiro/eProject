import styled from 'styled-components';
import { lightTheme } from 'styles';

interface Props {
  type: 'pending' | 'cancelled' | 'confirmed';
  content: string;
}

export const StatusLabels = ({ type, content }: Props) => {

  let color = '';

  if (type === 'cancelled') {
    color = lightTheme.color_ui_danger;
  } else if (type === 'confirmed') {
    color = lightTheme.color_ui_ok_0;
  } else if (type === 'pending') {
    color = lightTheme.color_ui_text_main;
  }

  return (
    <Div color={color}>
      <Section color={color}/>
      <p>{ content }</p>
    </Div>
  );
};

const Div = styled.div`
  padding: 0.25em 0.75em;
  color: ${props => props.color};
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  background-color: ${props => props.color + '1A'};
  border-radius: 8px;
`;
  
const Section = styled.section`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${props => props.color};
`;
