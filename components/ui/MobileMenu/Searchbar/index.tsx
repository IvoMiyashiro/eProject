import { SearchIcon } from 'components/icons';
import styled from 'styled-components';

export const Searchbar = () => {
  return (
    <Div>
      <Button>
        <SearchIcon width="30px" height="25px" />
      </Button>
      <Input placeholder="Search..." />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  background-color: ${props => props.theme.color_primary_2};
  border-radius: 4px;
  padding: 0.5em;
  gap: 0.75em;
`;
  
const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color_ui_text_contrast};
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 1rem;

  ::placeholder {
    color: ${props => props.theme.color_ui_text_contrast};  
  }
`;
