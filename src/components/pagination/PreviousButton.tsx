import React from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { PreviousButtonProps } from '../../interfaces/PaginationInterface';

/**
 * PreviousButton component for pagination
 */
const PreviousButton: React.FC<PreviousButtonProps> = ({ page, setPage }) => {
  if (page <= 1) return null;

  return (
    <button 
      onClick={() => setPage(page - 1)}
      className="flex items-center justify-center 
               bg-zinc-100 hover:bg-zinc-500
               text-zinc-800 font-semibold hover:text-white 
                 py-2 px-4 
                 border border-zinc-400 hover:border-transparent rounded 
                 cursor-pointer"
    >
      <MdNavigateBefore />
      Previous
    </button>
  );
};

export default PreviousButton;
