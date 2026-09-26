'use client';
import { FitLogContext } from '@/context/FitLogContext';
import { FitLogType } from '@/types/fitLogType';
import { use } from 'react';
import { LuBookmark } from 'react-icons/lu';
import { toast } from 'react-toastify';

const SavedBtn = ({ fitLog }: { fitLog: FitLogType }) => {
  const { seved, setSeved } = use(FitLogContext);
  const handleSavedButton = () => {
    const find = seved.find(save => save.id === fitLog.id);
    if (find) {
      toast.warning('Already in your saved list');
    } else {
      setSeved([...seved, fitLog]);
      toast.success('Save for later');
    }
  };
  return (
    <button
      onClick={handleSavedButton}
      className="flex items-center justify-center gap-1 px-4 py-2 rounded-xl border cursor-pointer"
    >
      <LuBookmark /> Save for later
    </button>
  );
};

export default SavedBtn;
