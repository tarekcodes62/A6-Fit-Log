import banner from '@/assets/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-6 mx-10 bg-[#15171D] p-10 rounded-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#c4f000] text-sm sm:text-xl">WORKOUT LIBRARY</h2>
        <h1 className="text-2xl sm:text-4xl font-bold">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[#b0b2b5] text-[12px] sm:text-[16px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="">
          <Link href={'#library'}>
            <button className="bg-[#c4f000] text-black px-4 py-2 rounded-2xl text-[12px] md:text-[14px] cursor-pointer hover:bg-[#b4db05]">
              BROWSE WORKOUTS
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:flex justify-center">
        <Image src={banner} alt="hero-banner" width={500} height={600} />
      </div>
    </div>
  );
};

export default Banner;
