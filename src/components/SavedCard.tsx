import { FitLogContext } from '@/context/FitLogContext';
import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { LuFlame } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const SavedCard = ({ plan }: { plan: FitLogType }) => {
  const { deleteSaved } = use(FitLogContext);
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
          <button className="border py-2 px-4 rounded-2xl cursor-pointer text-[14px]">
            View Details
          </button>
        </Link>
        <button
          className="p-2 hover:bg-[#0a0b0e] duration-300 rounded-full cursor-pointer"
          onClick={() => {
            deleteSaved(plan.id);
            toast.success('Removed from saved');
          }}
        >
          <RxCross2 />
        </button>
      </div>
    </li>
  );
};

export default SavedCard;
