import { Spinner } from 'components/ui';
import Link from 'next/link';

import { lightTheme } from 'styles';
import { Div, SpinnerWrapper, P, Section } from './styles';

interface Props { 
  inputValue: string;
  isLoading: boolean;
  isFocus: boolean;
  listValues: any[];
  onSubmitPath: string,
  resultsDisplay: ({ data }: any) => JSX.Element;
  handleFocus: (value: boolean) => void;
  handleHover: (value: boolean) => void;
  handleInputValue: (value: string) => void;
}

export const SearchResults = ({
  inputValue,
  isLoading,
  isFocus,
  listValues,
  onSubmitPath,
  resultsDisplay: ResultsDisplay,
  handleFocus,
  handleHover,
  handleInputValue
}: Props) => {

  const MAX_NUMBER_OF_SEARCH_RESULTS = 4;
  const isVisible = inputValue?.length > 0 && listValues?.length !== 0 && isFocus;

  return (
    <>
      {
        isVisible
        &&
        <Div
          onMouseOver={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          onClick={() => {handleFocus(false); handleInputValue('');}}
        >
          {
            isLoading
              ? <SpinnerWrapper><Spinner size="18px" color={lightTheme.color_primary_0} /></SpinnerWrapper>
              : (
                listValues.map((data, i) => {
                  if (i < MAX_NUMBER_OF_SEARCH_RESULTS) {
                    return <ResultsDisplay key={data.id} data={data}/>;
                  };
                })
              )
          }
          {
            listValues.length > MAX_NUMBER_OF_SEARCH_RESULTS
            &&
            <Link href={onSubmitPath + inputValue} passHref>
              <Section>
                <P>And {listValues.length - MAX_NUMBER_OF_SEARCH_RESULTS} more items</P>
              </Section>
            </Link>
          }
        </Div>
      }
    </>
  );
};
