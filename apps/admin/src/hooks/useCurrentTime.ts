import { useEffect, useState } from 'react';
import moment from 'moment';

export default function useCurrentTime(format = 'YYYY-MM-DD HH:mm:ss') {
  const [currentTime, setCurrentTime] = useState(moment().format(format));

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(moment().format(format));
    }, 1000);

    return () => clearInterval(timerId);
  }, [format]);

  return currentTime;
}
