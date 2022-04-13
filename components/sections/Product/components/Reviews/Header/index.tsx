import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { EditIcon } from 'components/icons';
import { Button } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Wrapper, Span, View, Text, Select, Option, P } from './styles';

interface Props {
  totalLenReviews: number;
  itemsPerPage: number;
  handleItemsPerPage: Dispatch<SetStateAction<number>>;
}

export const Header = ({ totalLenReviews, itemsPerPage, handleItemsPerPage }: Props) => {

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleItemsPerPage(Number(e.target.value));
  };

  return (
    <Div>
      <Wrapper>
        <Button
          width="150px"
          height="30px"
          bgColor={lightTheme.color_primary_2}
          bRadius="4px"
          textColor="white"
        >
          <>
            <EditIcon width="22px" height="22px" />
            <Span>Write a review</Span>
          </>
        </Button>
        <View>
          <Text>View: </Text>
          <Select value={itemsPerPage} onChange={handleSelectChange}>
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={15}>15</Option>
          </Select>
        </View>
      </Wrapper>
      <P>{ !!totalLenReviews ? totalLenReviews : '0' } reviews found</P>
    </Div>
  );
};
