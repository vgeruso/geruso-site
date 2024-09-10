import { useEffect, useState } from "react"

export const useYear = (): {year: number, old: number} => {
  const [year, setYear] = useState<number>(0);
  const [old, setOld] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    
    setYear(today.getFullYear());

    const actualMonth = today.getMonth()+1;
    const preOld = (year-1996);

    setOld(preOld);

    if (actualMonth < 5)
      setOld(preOld-1);

  }, [year, old])

  return {year, old};
}