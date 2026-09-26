import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import { IoTimeOutline } from 'react-icons/io5';
import { LuFlame } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';

interface FitLogProps {
  fitLog: FitLogType;
}

const FitLog = ({ fitLog }: FitLogProps) => {
  return (
    <Link href={`/exercise-details/${fitLog.id}`}>
      <div className="bg-[#15171D] rounded-2xl overflow-hidden hover:border duration-100 hover:duration-100 border-[#c4f000]">
        <Image
          src={fitLog.image}
          alt={fitLog.name}
          width={300}
          height={200}
          className="w-full h-55 object-cover"
        />
        <div className=" flex flex-col gap-2 p-6">
          <div className="flex gap-2">
            {fitLog.muscleGroups.map((muscle: string) => (
              <button
                key={muscle}
                className="px-2 bg-[#c4f000] rounded-2xl text-black text-sm"
              >
                {muscle}
              </button>
            ))}
          </div>
          <h2 className="text-2xl">{fitLog.name}</h2>
          <h4 className="text-[14px] text-[#b0b2b5]">{fitLog.equipment}</h4>
          <div className="flex gap-4 text-[14px]">
            <span className="flex items-center gap-1">
              <IoTimeOutline className="text-[#c4f000]" />
              {fitLog.duration} min
            </span>
            <span className="flex items-center gap-1">
              <LuFlame className="text-[#c4f000]" />
              {fitLog.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaRegStar className="text-[#c4f000]" />
              {fitLog.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FitLog;
