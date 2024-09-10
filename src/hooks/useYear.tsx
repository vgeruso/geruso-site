import { useEffect, useState } from "react"

type NumbersPresentation = {
  year: number,
  old: number,
  experienceYears: number,
};

export const useYear = (): NumbersPresentation => {
  const [year, setYear] = useState<number>(0);
  const [old, setOld] = useState<number>(0);
  const [experienceYears, setEperienceYears] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    
    setYear(today.getFullYear());

    const actualMonth = today.getMonth()+1;
    const preOld = (year-1996);
    const experience = (year-2019);

    setOld(preOld);
    setEperienceYears(experience);

    if (actualMonth < 5)
      setOld(preOld-1);

  }, [year, old])

  return {year, old, experienceYears};
}