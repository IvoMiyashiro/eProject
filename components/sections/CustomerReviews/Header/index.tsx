import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { EyeIcon } from 'components/icons';
import { InputSelectIcon } from 'components/ui';

interface Props {
  handleLimitPage: Dispatch<SetStateAction<number>>;
}

export const Header = ({ handleLimitPage }: Props) => {
  return (
    <Div>
      <InputSelectIcon 
        icon={EyeIcon}
        name="orders-limit"
        values={['10', '15', '20', '25']}
        onChange={handleLimitPage}
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
