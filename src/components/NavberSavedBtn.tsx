'use client';

import { FitLogContext } from '@/context/FitLogContext';
import Link from 'next/link';
import { use } from 'react';

const NavberSavedBtn = () => {
  const { seved } = use(FitLogContext);
  return (
    <Link href={'/my-plan'}>
      <div className="flex items-center gap-1 hover:bg-[#14181d] px-3 py-2 rounded-xl">
        <button>Saved</button>
        <span className=" px-2.5 border border-[#ededed]  rounded-2xl">
          {seved.length}
        </span>
      </div>
    </Link>
  );
};

export default NavberSavedBtn;
