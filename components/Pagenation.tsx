import Router from 'next/router';
import Link from 'next/link';
import { FC } from 'react';
import { PagenationProps } from '../types/types';

export const Pagination: FC<PagenationProps> = ({ pagenation, currentPage }) => {

  return (
    <div className="flex items-center justify-center space-x-1 mt-8">
      {pagenation.map((page, index) => (
          <Link key={index} href={ page == 1 ? '/' : `page/${page}`}>
            <a className={`px-4 py-2 border hover:bg-black hover:text-white ${
              currentPage == page && 'bg-black text-white'
            }`}>
              {page}
            </a>
          </Link>
      ))}
    </div>
  );
};