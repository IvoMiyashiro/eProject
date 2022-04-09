import styled from 'styled-components';

interface Props {
  price: number;
  discount_price: number;
}

export const Price = ({ price, discount_price }: Props) => {
  return (
    <Div>
      <Wrapper>
        <H2>${ price }</H2>
        <Discount>${ discount_price }</Discount>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

const Discount = styled.p`
  text-decoration: line-through;
  color: ${props => props.theme.color_neutral_2};
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Inter';
`;
