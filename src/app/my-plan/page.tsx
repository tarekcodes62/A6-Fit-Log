'use client';

import EmtyStateMyPlan from '@/components/EmtyStateMyPlan';
import SavedCard from '@/components/SavedCard';
import TodaysPlanCard from '@/components/TodaysPlanCard';
import { FitLogContext } from '@/context/FitLogContext';
import { FitLogType } from '@/types/fitLogType';
import { use, useState } from 'react';

const MyPlanPage = () => {
  const [showPlan, setShowPlan] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  const [sorting, setSorting] = useState<string>('duration');
  const { todayPlen, seved } = use(FitLogContext);

  // sorting the todaysplan and saved
  const sortFitLog = (sortData: FitLogType[]) => {
    const copyFitLog = [...sortData];
    if (sorting === 'duration') {
      copyFitLog.sort((a, b) => a.duration - b.duration);
    } else if (sorting === 'calories') {
      copyFitLog.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else if (sorting === 'rating') {
      copyFitLog.sort((a, b) => b.rating - a.rating);
    }
    return copyFitLog;
  };
  const sortPlan = sortFitLog(todayPlen);
  const sortSaved = sortFitLog(seved);
  // exercises
  const exercises =
    (showPlan && todayPlen.length > 0 && todayPlen.length) ||
    (showSaved && seved.length > 0 && seved.length);
  // duration
  const minutes =
    (showPlan &&
      todayPlen.length > 0 &&
      todayPlen.reduce((acc, cur) => acc + cur.duration, 0)) ||
    (showSaved &&
      seved.length > 0 &&
      seved.reduce((acc, cur) => acc + cur.duration, 0));

  // calorise
  const calorise =
    (showPlan &&
      todayPlen.length > 0 &&
      todayPlen.reduce((acc, cur) => acc + cur.caloriesBurned, 0)) ||
    (showSaved &&
      seved.length > 0 &&
      seved.reduce((acc, cur) => acc + cur.caloriesBurned, 0));
  return (
    <div className="">
      <div className="py-6 px-10 max-w-7xl mx-auto">
        <div className="mb-5">
          <h2 className="uppercase text-4xl">My Plan</h2>
          <p className="text-[#bfbfbf]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#15171D] rounded-2xl mb-6">
          <div className="p-5 border-b sm:border-b-0 border-b-[#393939]">
            <p className="text-[#bfbfbf] text-sm">Exercises</p>
            <span className="text-4xl font-bold text-[#c4f000]">
              {exercises || 0}
            </span>
          </div>
          <div className="border-b sm:border-b-0 border-b-[#393939] sm:border-l border-l-[#393939] p-5">
            <p className="text-[#bfbfbf] text-sm">Minutes</p>
            <span className="text-4xl font-bold">{minutes || 0}</span>
          </div>
          <div className="sm:border-l border-l-[#393939] p-5">
            <p className="text-[#bfbfbf] text-sm">Calories</p>
            <span className="text-4xl font-bold">{calorise || 0}</span>
          </div>
        </div>
        {/* name of each tab group should be unique */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div role="tablist" className="tabs tabs-box w-fit bg-base-200">
            <button
              onClick={() => {
                setShowPlan(true);
                setShowSaved(false);
              }}
              type="button"
              role="tab"
              className={`tab ${showPlan && 'tab-active text-[#c4f000]'}`}
              aria-selected={showPlan}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => {
                setShowPlan(false);
                setShowSaved(true);
              }}
              type="button"
              role="tab"
              className={`tab ${showSaved && 'tab-active text-[#c4f000]'}`}
              aria-selected={showSaved}
            >
              Saved
            </button>
          </div>
          <label className="form-control w-full max-w-xs">
            <span className="label-text mb-1">Sort By</span>
            <select
              className="select select-bordered rounded-2xl"
              onChange={e => setSorting(e.target.value)}
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>
        {/* emty state */}
        {showPlan && todayPlen.length < 1 && <EmtyStateMyPlan />}
        {showSaved && seved.length < 1 && <EmtyStateMyPlan />}
        {showPlan && todayPlen.length > 0 && (
          <ul className="flex flex-col gap-6">
            {sortPlan.map(plan => (
              <TodaysPlanCard key={plan.id} plan={plan} />
            ))}
          </ul>
        )}
        {showSaved && seved.length > 0 && (
          <ul className="flex flex-col gap-6">
            {sortSaved.map(plan => (
              <SavedCard key={plan.id} plan={plan} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
