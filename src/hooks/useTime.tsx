import { useEffect, useState } from 'react';
import moment from 'moment';

export const useTime = () => {
  const [curDate, setCurDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [curTime, setCurTime] = useState(moment(new Date()).format('h:mm A'));
  const [isPM, setIsPM] = useState(moment(new Date()).format('A') === 'PM');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() === 0) {
        setCurTime(moment(now).format('h:mm A'));
        setCurDate(moment(now).format('YYYY-MM-DD'));
        setIsPM(moment(now).format('A') === 'PM');
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return { curTime, curDate, isPM };
};
