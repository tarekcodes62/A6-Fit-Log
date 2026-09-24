import { FitLogType } from '@/types/fitLogType';
import React from 'react';
import FitLog from './FitLog';
const fitLogApiFetch = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  return await response.json();
};
const Library = async () => {
  const fitLogData = await fitLogApiFetch();
  return (
    <div id="library" className="px-10 py-5">
      <div className="mb-6">
        <h2 className="text-4xl mb-1">THE LIBRARY</h2>
        <p className="text-[#b0b2b5]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fitLogData.map((fitLog: FitLogType) => (
          <FitLog key={fitLog.id} fitLog={fitLog} />
        ))}
      </div>
    </div>
  );
};

export default Library;
