import { Dispatch, SetStateAction } from 'react';

import { IInputControl, INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { ArrowRightIcon } from 'components/icons';
import { InputControl } from 'components/ui';

import { Div, LabelCard, P, Span, Wrapper, Button } from './styles';

interface Props {
  productLabel: IInputControl;
  productLabelsList: string[];
  handleProductLabel: Dispatch<SetStateAction<IInputControl>>;
  handleProductLabelsList: Dispatch<SetStateAction<string[]>>;
}

export const LabelsForm = ({ 
  productLabel,
  productLabelsList,
  handleProductLabel,
  handleProductLabelsList
}: Props) => {

  const handleClick = () => {
    handleProductLabelsList(prev => ([...prev, productLabel.value]));
    handleProductLabel(INPUT_CONTROL_INIT_STATE);
  };

  const handleDeleteLabel = (labelName: string) => {
    handleProductLabelsList(prev => {
      return prev.filter(label => label !== labelName);
    });
  };

  return (
    <>
      <Wrapper>
        <InputControl
          placeholder="Labels"
          type="text"
          state={productLabel}
          handleStateValue={handleProductLabel}
          optional
        />
        {
          !!productLabel.value
          &&
          <Button type="button" onClick={handleClick}>
            <ArrowRightIcon width="25px" height="25px" />
          </Button>
        }
      </Wrapper>
      {
        productLabelsList?.length > 0
        &&
        <Div>
          {
            productLabelsList.map((label, i) => {
              return (
                <LabelCard key={i}>
                  <P>{ label }</P>
                  <Span onClick={() => handleDeleteLabel(label)}>&times;</Span>
                </LabelCard>
              );
            })
          }
        </Div>
      }
    </>
  );
};
