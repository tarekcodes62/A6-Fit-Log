import Link from 'next/link';
import React from 'react';

const EmtyStateMyPlan = () => {
  return (
    <div className="flex flex-col justify-center text-center bg-[#15171D] p-5 gap-2 rounded-2xl">
      <h2 className="uppercase text-2xl">Nothing here yet</h2>
      <p className="text-[#b0b2b5] mb-4">
        Browse the library and add a lift to get today moving.
      </p>
      <div className="">
        <Link href={'/'}>
          <button
            type="button"
            className="bg-[#c4f000] text-black px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#b4db05]"
          >
            Go to workouts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmtyStateMyPlan;
