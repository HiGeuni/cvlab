import { useEffect, useState } from 'react';
import { themeStyle, AMStyle, PMStyle } from '../styles/theme';
import { useTime } from '../hooks/useTime';

const Home = () => {
  const { curTime, curDate, isPM } = useTime();
  const [curStyle, setCurStyle] = useState<themeStyle | undefined>(undefined);

  useEffect(() => {
    setCurStyle(isPM ? PMStyle : AMStyle);
  }, [isPM]);

  return (
    <>
      <div
        className={`fixed text-4xl left-10 top-10 text-[${curStyle?.color}] font-bold`}
      >
        CVLAB 출입관리
      </div>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${curStyle?.bgUrl})`,
        }}
      >
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-[${curStyle?.color}] font-bold`}
        >
          <div>{curDate}</div>
          <div className="mt-4">{curTime}</div>
          <button
            className={`bg-[${curStyle?.btnBgColor}] rounded-3xl h-[115px] w-[400px] py-0 mt-[150px] font-bold`}
          >
            출석 / 퇴근
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
