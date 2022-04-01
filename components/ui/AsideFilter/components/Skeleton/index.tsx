import { Wrapper, H1, Section, Div, Checkbox, Label } from './styles';

interface Props {
  rows: number
}

export const Skeleton = ({ rows }: Props) => {
  return (
    <Wrapper>
      <H1></H1>
      <Section>
        {
          Array.apply(null, Array(rows)).map((value, i) => {
            return (
              <Div key={i}>
                <Checkbox></Checkbox>
                <Label></Label>
              </Div>
            );
          })
        }
      </Section>
    </Wrapper>
  );
};
