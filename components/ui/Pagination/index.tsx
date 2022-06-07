import { usePagination, DOTS } from 'hooks';
import { ArrowLeftIcon, ArrowRightIcon } from 'components/icons';

import { Div, P, Ul, Li, Span } from './styles';

interface Props {
  offset: number;
  name: string;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (e: any) => void
}

export const Pagination = ({
  offset,
  name,
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
  console.log(paginationRange);
  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Div>
      <P>
        { name }: { (offset === 0) ? 1 : offset } - { (currentPage * pageSize > totalCount) ? totalCount :  currentPage * pageSize } of { totalCount }
      </P>
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
    </Div>
  );
};
