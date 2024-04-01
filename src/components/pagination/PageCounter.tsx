import React from 'react';
import { PageCounterProps } from '../../interfaces/PaginationInterface';

/**
 * Page counter component for pagination
 */
const PageCounter: React.FC<PageCounterProps> = ({ page, totalPages }) => {
  return (
    <div className="flex items-center justify-center bg-transparent font-light py-2 px-4">
        It's page {page} of {totalPages}
    </div>
  );
};

export default PageCounter;