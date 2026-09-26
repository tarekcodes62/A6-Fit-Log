'use client';

import { FitLogContext } from '@/context/FitLogContext';
import Link from 'next/link';
import { use } from 'react';

const NavberPlanBtn = () => {
  const { todayPlen } = use(FitLogContext);
  return (
    <Link href={'/my-plan'}>
      <div className="flex items-center gap-1 hover:bg-[#14181d] px-3 py-2 rounded-xl">
        <button>Plan</button>
        <span className=" px-2.5 text-black bg-[#c4f000] rounded-2xl">
          {todayPlen.length}
        </span>
      </div>
    </Link>
  );
};

export default NavberPlanBtn;
