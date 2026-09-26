'use client';
import { FitLogContext } from '@/context/FitLogContext';
import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoCheckmark, IoTimeOutline } from 'react-icons/io5';
import { LuFlame } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const TodaysPlanCard = ({ plan }: { plan: FitLogType }) => {
  const { deletePlan } = use(FitLogContext);
  return (
    <li className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:items-center bg-[#15171D] p-4 rounded-2xl">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <Image
          src={plan.image}
          alt={plan.name}
          width={100}
          height={100}
          className="object-cover w-full sm:w-37.5 h-30 sm:h-25 rounded-xl"
        />
        <div className="">
          <h2 className="text-xl">{plan.name}</h2>
          <h4 className="text-[14px] text-[#b0b2b5] mb-2">{plan.equipment}</h4>
          <div className="flex gap-4 text-[14px]">
            <span className="flex items-center gap-1">
              <IoTimeOutline className="text-[#c4f000]" />
              {plan.duration} min
            </span>
            <span className="flex items-center gap-1">
              <LuFlame className="text-[#c4f000]" />
              {plan.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaRegStar className="text-[#c4f000]" />
              {plan.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={`/exercise-details/${plan.id}`}>
          <button className="border py-1 sm:py-2 px-2 sm:px-4 rounded-2xl cursor-pointer text-[10px] sm:text-[14px]">
            View Details
          </button>
        </Link>
        <button
          className="flex gap-2 items-center py-1 sm:py-2 px-2 sm:px-4 rounded-2xl cursor-pointer bg-[#c4f000] text-black text-[10px] sm:text-[14px]"
          onClick={() => {
            deletePlan(plan.id);
            toast.success('Workout logged - nice work');
          }}
        >
          <IoCheckmark />
          Mark as Done
        </button>
        <button
          className="p-2 hover:bg-[#0a0b0e] duration-300 rounded-full cursor-pointer"
          onClick={() => {
            deletePlan(plan.id);
            toast.success("Removed from today's plan");
          }}
        >
          <RxCross2 />
        </button>
      </div>
    </li>
  );
};

export default TodaysPlanCard;
