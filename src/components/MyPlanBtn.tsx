'use client';
import { FitLogContext } from '@/context/FitLogContext';
import { FitLogType } from '@/types/fitLogType';
import { use } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const MyPlanBtn = ({ fitLog }: { fitLog: FitLogType }) => {
  const { todayPlen, setTodayPlan } = use(FitLogContext);
  const handlePlanButton = () => {
    const find = todayPlen.find(plan => plan.id === fitLog.id);
    if (find) {
      toast.warning('Already in your plan');
    } else {
      setTodayPlan([...todayPlen, fitLog]);
      toast.success("Added to today's plan");
    }
  };
  return (
    <button
      onClick={handlePlanButton}
      className="flex items-center justify-center gap-1 px-4 py-2 text-black bg-[#c4f000] rounded-xl hover:bg-[#b4dc04] cursor-pointer"
    >
      <IoCalendarOutline /> Add to today&apos;s plan
    </button>
  );
};

export default MyPlanBtn;
