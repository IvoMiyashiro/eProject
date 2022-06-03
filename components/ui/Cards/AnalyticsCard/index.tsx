import { ReactElement } from 'react';
import { Div, P, H3, Section } from './styles';

interface Props {
  background_color: string;
  data: string;
  icon: ReactElement;
  text_color: string;
  title: string;
}

export const AnalyticsCard = ({ background_color, text_color, icon, title, data }: Props) => {
  return (
    <Div background_color={background_color} text_color={text_color}>
      { icon }
      <Section>
        <P>{ title }</P>
        <H3>{ data }</H3>
      </Section>
    </Div>
  );
};
