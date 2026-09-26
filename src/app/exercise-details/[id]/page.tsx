import MyPlanBtn from '@/components/MyPlanBtn';
import SavedBtn from '@/components/SavedBtn';
import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) {
    notFound();
  }
  const fitLog: FitLogType = await res.json();

  return (
    // exercise details
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-6 px-10 max-w-7xl mx-auto">
      <div className="rounded-4xl overflow-hidden">
        <Image
          src={fitLog.image}
          alt={fitLog.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="text-4xl mb-2 uppercase">{fitLog.name}</h2>
          <p className="text-[#b0b2b5]">{fitLog.description}</p>
        </div>
        {/* muscleGroups */}
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
        {/*  */}
        <div className="bg-[#15171D] rounded-2xl">
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Equipment</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.equipment}</h4>
          </div>
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Difficulty</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.difficulty}</h4>
          </div>
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Sets</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.sets}</h4>
          </div>
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Reps</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.reps}</h4>
          </div>
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Duration</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.duration} min</h4>
          </div>
          <div className="border-b border-b-[#2a2f39] py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Calories</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.caloriesBurned} kcal</h4>
          </div>
          <div className="py-3 px-4 grid grid-cols-1 sm:grid-cols-2">
            <h3 className="uppercase text-[#b7b7b7]">Rating</h3>
            <h4 className="text-[#d4d4d4]">{fitLog.rating}</h4>
          </div>
        </div>
        {/* Instructions */}
        <div className="">
          <h2 className="uppercase text-2xl mb-2">Instructions</h2>
          <div className="flex flex-col gap-1">
            {fitLog.instructions.map((ins: string, index: number) => (
              <p key={index} className="text-[#d4d4d4]">
                {index + 1}. {ins}
              </p>
            ))}
          </div>
        </div>
        {/* bottons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <MyPlanBtn fitLog={fitLog} />
          <SavedBtn fitLog={fitLog} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
