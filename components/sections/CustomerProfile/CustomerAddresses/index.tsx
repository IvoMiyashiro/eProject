import { ArrowRightIcon } from 'components/icons';
import { Button } from 'components/ui';
import { lightTheme } from 'styles';

import { H3, Wrapper,  Div, P } from './styles';

export const CustomerAddresses = () => {
  return (
    <div>
      <H3>Addresses</H3>
      <Div>
        <Button
          bgColor={lightTheme.color_neutral_1}
          bRadius="4px"
          textColor={lightTheme.color_ui_text_main}
        >
          <Wrapper>
            <P>Add new address</P>
            <ArrowRightIcon width="20px" height="20px" />
          </Wrapper>
        </Button>
      </Div>
    </div>
  );
};
