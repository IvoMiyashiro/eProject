import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from 'components/icons';
import { lightTheme } from 'styles';

interface Props {
  limit: number;
  pageCount: number;
  handlePageClick: (valu: any) => void;
}

export const Pagination = ({ limit, pageCount, handlePageClick }: Props) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRightIcon width="24px" height="24px" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={limit}
        pageCount={pageCount}
        previousLabel={<ArrowLeftIcon width="24px" height="24px" />}
        renderOnZeroPageCount={null!}
        containerClassName="pagination"
        pageClassName="links"
        previousLinkClassName="prevArrow"
        nextLinkClassName="nextArrow"
        activeLinkClassName="activeLink"
      />

      <style>{`
        .pagination {
          align-items: center;
          display: flex;
          justify-content: center;
          list-style: none;
          margin: 0 auto;
        }

        .links {
          align-items: center;
          border-right: none;
          border: 1px solid ${lightTheme.color_neutral_2};
          cursor: pointer;
          display: flex;
          display: flex;
          font-family: 'Inter';
          height: 40px;
          justify-content: center;
          width: 40px;
        }

        .links:last-child {
          border-right: 1px solid ${lightTheme.color_neutral_2};
        }

        .prevArrow, .nextArrow {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          height: 40px;
          border: 1px solid ${lightTheme.color_neutral_2};
          width: 40px;
        }

        .prevArrow {
          border-right: none;
          border-radius: 4px 0 0 4px;
        }

        .nextArrow {
          border-left: none;
          border-radius: 0 4px 4px 0;
        }

        .selected {
          color: white;
          background-color: ${lightTheme.color_neutral_2};
        }
      `}</style>
    </>
  );
};
