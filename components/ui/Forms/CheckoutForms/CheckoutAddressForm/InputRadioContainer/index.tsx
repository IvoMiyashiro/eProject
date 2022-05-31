import { Dispatch, SetStateAction, useState } from 'react';

import { IAddress } from 'interfaces';

import { InputRadioCard } from 'components/ui';
import { HomeIcon } from 'components/icons';

interface Props {
  address: IAddress;
  handleDeliveryAddress: (data: IAddress) => void;
}

export const InputRadioContainer = ({ address, handleDeliveryAddress }: Props) => {

  const [isSelected, setSelected] = useState(false);
  const { address: direction, zip, province, locality } = address;

  return (
    <>
      <InputRadioCard
        name="radio-group"
        title={direction}
        text={`Zip: ${zip} - ${province}, ${locality}`}
        icon={<HomeIcon width="22px" height="22px" />}
        value={address}
        isSelected={isSelected}
        onChange={handleDeliveryAddress}
        handleSelected={setSelected}
        handleOtherValues={[setSelected]}
      />
    </>
  );
};
