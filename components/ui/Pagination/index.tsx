import styled from 'styled-components';
import { usePagination, DOTS } from 'hooks/usePagination';
import { ArrowLeftIcon, ArrowRightIcon } from 'components/icons';

interface Props {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (e: any) => void
}

export const Pagination = ({
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  onPageChange,
}: Props) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  }) || [];

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Ul>
      {
        currentPage !== 1
        &&
        <Li onClick={onPrevious}>
          <ArrowLeftIcon width="20px" height="20px" />
        </Li>
      }
      {
        paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) return <li>&#8230;</li>;
          return (
            <Li 
              key={i} 
              onClick={(e: any) => onPageChange(Number(e.target.innerHTML))}
            >
              <Span isActive={i === (currentPage - 1)} >{pageNumber}</Span>
            </Li>
          );
        })
      }
      {
        currentPage !== lastPage
        &&
        <Li onClick={onNext}>
          <ArrowRightIcon width="20px" height="20px" />
        </Li>
      }
    </Ul>
  );
};

interface Styles {
  isActive: boolean
}

const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 1em;
  list-style: none;
`;
  
const Li = styled.li`
  cursor: pointer;
  height: 20px;
`;

const Span = styled.span<Styles>`
  background-color: ${props => props.isActive ? props.theme.color_primary_2 : 'transparent'};
  border-radius: 4px;
  color: ${props => props.isActive ? 'white' : props.theme.color_ui_text_main};
  padding: 0.25em 0.65em;
`;
