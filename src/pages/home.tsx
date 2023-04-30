import { useEffect, useState } from 'react';
import { useTime } from '../hooks/useTime';
import { AMStyle, PMStyle, themeStyle } from '../styles/theme';
import { Link } from 'react-router-dom';

const Home = () => {
  const { curTime, curDate, isPM } = useTime();
  const [curStyle, setCurStyle] = useState<themeStyle>(
    isPM ? PMStyle : AMStyle,
  );

  useEffect(() => {
    setCurStyle(isPM ? PMStyle : AMStyle);
  }, [isPM]);

  return (
    <>
      <div
        className={`fixed text-[${curStyle.color}] text-4xl left-10 top-10 font-bold`}
      >
        CVLAB 출입관리
      </div>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${curStyle.bgUrl})`,
        }}
      >
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-[${curStyle.color}] font-bold`}
        >
          <div>{curDate}</div>
          <div className="mt-4">{curTime}</div>
          <div className="flex flex-col">
            <button
              className={`bg-[${curStyle.btnBgColor}] rounded-3xl h-[115px] w-[400px] py-0 mt-[150px] font-bold border-solid`}
            >
              <Link to="/faceId">출석 / 퇴근</Link>
            </button>
            <div className="flex justify-center text-xl text-[#46363577] gap-x-4">
              회원이 아니신가요?
              <Link className="text-[#46363599]" to="/register">
                등록하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
