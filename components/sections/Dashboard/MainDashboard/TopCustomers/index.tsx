import styled from 'styled-components';
import { BestCustomerCard } from 'components/ui';
import { useBestCustomers } from 'hooks';
import { Wrapper } from '../styles';


export const TopCustomers = () => {

  const limit = 3;
  const { customers } = useBestCustomers({ limit });

  return (
    <>
      {
        customers?.length !== 0
      &&
      <Wrapper>
        <H2>Top { limit } customers</H2>
        {
          customers.map(({ id, name, total_purchases, profile_image, created_at }) => {
            return (
              <BestCustomerCard
                key={id}
                id={id}
                name={name}
                total_purchases={total_purchases}
                profile_image={profile_image}
                created_at={created_at}
              />
            );
          })
        }
      </Wrapper>
      }
    </>
  );
};

const H2 = styled.h2`
  font-size: 1.15rem;
`;
