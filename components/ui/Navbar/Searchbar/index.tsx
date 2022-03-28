import { Button } from 'components/ui/Button';

import styled from 'styled-components';
import { lightTheme } from 'styles';
import { bp } from 'styles';

export const Searchbar = () => {
  return (
    <Div>
      <Input
        type="text"
        placeholder="Type a product name..."
      />
      <Button
        bgColor={lightTheme.color_tertiary_0}
        textColor={lightTheme.color_primary_0}
        width="100px"
        bRadius="2px"
      >
        Search
      </Button>
    </Div>
  );
};

const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
  height: 40px;

  @media (max-width: ${bp.tablet}) {
    display: none;
  }
`;
  
export const Input = styled.input`
  border-radius: 2px;
  border: none;
  height: 100%;
  outline: none;
  padding: 0 1em;
  transition: 0.2s ease-in-out;
  width: 100%;
`;

