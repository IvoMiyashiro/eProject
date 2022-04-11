import { Rating } from 'components/ui/RatingStars';
import styled from 'styled-components';

interface Props {
  cons: string;
  created_at: Date;
  overall: string;
  pros: string;
  rating: number;
  title: string;
}

export const ReviewInfo = ({ rating, created_at, title, pros, cons, overall }: Props) => {

  const formatedText = (text: string) => {
    const newText = text.split('\n').map((str, i) => <p key={i}>{str}</p>);
    return newText;
  };
  
  return (
    <div>
      <Header>
        <Rating rating={rating}/>
        <P>{ new Date(created_at).toLocaleDateString() }</P>
      </Header>
      <H2>{ title }</H2>
      <Section>
        <H3>Pros:</H3>
        { formatedText(pros) }
      </Section>
      <Section>
        <H3>Cons:</H3>
        { formatedText(cons) }
      </Section>
      <Section>
        <H3>Overall:</H3>
        { formatedText(overall) }
      </Section>
    </div>
  );
};

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
  font-family: 'Inter';
  font-size: 0.9rem;
`;

export const H2 = styled.h2`
  font-size: 1.15rem;
  margin: 0.5em 0;
`;

export const H3 = styled.h3`
  font-size: 1rem;
`;

export const Section = styled.section`
  font-size: 0.9rem;
  margin-bottom: 1em;
`;
