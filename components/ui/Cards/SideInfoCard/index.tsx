import styled from 'styled-components';
import { LampIcon } from 'components/icons';

interface Props {
  title: string;
  content: string;
}

export const SideInfoCard = ({ title, content }: Props) => {
  return (
    <Div>
      <Header>
        <LampIcon width="22px" height="22px" />
        <H2>{ title }</H2>
      </Header>
      <Section>
        <P>{ content }</P>
      </Section>
    </Div>
  );
};

const Div = styled.div`
    box-shadow:
    0px 0px 1.1px rgba(0, 0, 0, 0.044),
    0px 0px 3.8px rgba(0, 0, 0, 0.066),
    0px 0px 17px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
`;
  
const Header = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;
  padding: 0.5em 0.75em;
  border-bottom: 1px solid ${props => props.theme.color_neutral_1};
`;
  
const H2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: -0.15em;
`;
  
const Section = styled.section`
  padding: 0.5em 0.75em;
`;

const P = styled.p`
  font-size: 0.9rem;
`;
