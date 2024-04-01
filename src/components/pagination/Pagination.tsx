import React from 'react';
import { PaginationProps } from '../../interfaces/PaginationInterface';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import PageCounter from './PageCounter';

/**
 * Pagination component
 */
const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalPages }) => {
  return (
    <div className="w-full min-w-full my-4 text-center">
      <div className="mx-auto flex items-center place-items-center place-content-center mt-4 gap-x-4 sm:mt-0">
        <PreviousButton page={page} setPage={setPage} />
        <PageCounter page={page} totalPages={totalPages} />
        <NextButton page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Pagination;
