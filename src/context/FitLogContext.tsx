'use client';
import { FitLogType } from '@/types/fitLogType';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface BooksContextType {
  todayPlen: FitLogType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<FitLogType[]>>;
  seved: FitLogType[];
  setSeved: React.Dispatch<React.SetStateAction<FitLogType[]>>;
  deletePlan: (id: number) => void;
  deleteSaved: (id: number) => void;
}

export const FitLogContext = createContext<BooksContextType>({
  todayPlen: [],
  setTodayPlan: () => {},
  seved: [],
  setSeved: () => {},
  deletePlan: () => {},
  deleteSaved: () => {},
});
const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlen, setTodayPlan] = useState<FitLogType[]>([]);
  const [seved, setSeved] = useState<FitLogType[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('todayPlan');
      const storedSaved = localStorage.getItem('saved');

      if (storedPlan) setTodayPlan(JSON.parse(storedPlan));
      if (storedSaved) setSeved(JSON.parse(storedSaved));
    } catch (e) {
      console.error('Failed to parse localStorage data', e);
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('todayPlan', JSON.stringify(todayPlen));
    }
  }, [todayPlen, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('saved', JSON.stringify(seved));
    }
  }, [seved, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  // delete todays plan item
  const deletePlan = (id: number) => {
    const filterPlan = todayPlen.filter(plan => plan.id !== id);
    setTodayPlan(filterPlan);
  };
  // delete saved item
  const deleteSaved = (id: number) => {
    const filterSaved = seved.filter(plan => plan.id !== id);
    setSeved(filterSaved);
  };

  const values = {
    todayPlen,
    setTodayPlan,
    seved,
    setSeved,
    deletePlan,
    deleteSaved,
  };

  return (
    <FitLogContext.Provider value={values}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;
