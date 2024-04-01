import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { NextButtonProps } from '../../interfaces/PaginationInterface';

/**
 * NextButton component for pagination
 */
const NextButton: React.FC<NextButtonProps> = ({ page, totalPages, setPage }) => {
  if (page >= totalPages) return null;

  return (
    <button 
      onClick={() => setPage(page + 1)}
      className="flex items-center justify-center 
                 bg-zinc-100 hover:bg-zinc-500
                 text-zinc-800 font-semibold hover:text-white 
                 py-2 px-4 
                 border border-zinc-400 hover:border-transparent rounded 
                 cursor-pointer"
    >
      Next
      <MdNavigateNext />
    </button>
  );
};

export default NextButton;
