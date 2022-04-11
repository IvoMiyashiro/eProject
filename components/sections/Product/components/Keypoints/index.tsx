import styled from 'styled-components';

interface Props {
  keypoints: string;
}

export const Keypoints = ({ keypoints }: Props) => {
  return (
    <Div>
      <Wrapper>
        <H2>Keypoints</H2>
        <Underline />
      </Wrapper>
      <Section dangerouslySetInnerHTML={{__html: keypoints}}>
      </Section>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 1.5em;
`;
  
const H2 = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
`;

const Wrapper = styled.div`
  position: relative;
  width: 95px;
`;

const Underline = styled.span`
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: ${props => props.theme.color_tertiary_0};
  transform: rotate(-1.5deg);
  bottom: -4px;
  z-index: -1;
`;

const Section = styled.section`
  margin-top: 1em;
  font-size: 0.9rem;
  margin-left: 18px;
`;
