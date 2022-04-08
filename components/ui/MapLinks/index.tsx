import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  links: { name: string; link: string;}[]
}

export const MapLinks = ({ links }: Props) => {
  return (
    <Div>
      {
        links.map((link, i) => {
          return (
            <Div key={i}>
              <Link href={link.link} passHref >
                <A>{ link.name }</A>
              </Link>
              {
                links.length - 1 !== i
                &&
                <P> &#62; </P>
              }
            </Div>
          );
        })
      }
    </Div>
  );
};

export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
  margin-bottom: 0.5em;
`;

export const A = styled.a`
  color: ${props => props.theme.color_primary_2};
  font-size: 0.9rem;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  margin-top: -0.15em;
`;
