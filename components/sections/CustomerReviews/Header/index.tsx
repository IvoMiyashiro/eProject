import { useContext } from 'react';
import styled from 'styled-components';

import { CustomerReviewsContext } from 'context';
import { EyeIcon } from 'components/icons';
import { InputSelectIcon } from 'components/ui';

export const Header = () => {

  const { changeLimitPerPage } = useContext(CustomerReviewsContext);
  
  return (
    <Div>
      <InputSelectIcon 
        icon={EyeIcon}
        name="orders-limit"
        values={['10', '15', '20', '25']}
        onChange={changeLimitPerPage}
      />
    </Div>
  );
};

const Div = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  gap: 1em;
  width: 80px;
`;
