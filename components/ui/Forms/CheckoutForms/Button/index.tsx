import styled from 'styled-components';
import { Button, Spinner } from 'components/ui';
import { lightTheme } from 'styles';

interface Props {
  isLoading: boolean;
  disabled: boolean;
}

export const ButtonSection = ({ isLoading, disabled }: Props) => {
  return (
    <Div>
      <Button
        textColor={lightTheme.color_ui_text_contrast}
        bgColor={lightTheme.color_primary_0}
        bRadius='4px'
        disabled={disabled}
        type="submit"
      >
        {
          isLoading
            ? <Spinner size="18px" />
            : <P>Confirm</P>
        }
      </Button>
    </Div>
  );
};

export const Div = styled.div`
  width: 150px;
  margin-left: auto;
  height: 40px;
  margin-top: 1.5em;
`;

export const P = styled.p`
  font-size: 0.9rem;
`;
