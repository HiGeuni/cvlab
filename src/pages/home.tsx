import moment from 'moment';
import { useEffect, useState } from 'react';
const Home = () => {
  const [curDate, setCurDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [curTime, setCurTime] = useState(moment(new Date()).format('h:mm A'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime(moment(new Date()).format('h:mm A'));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="fixed text-white text-4xl right-10 top-10">
        CVLAB 출입관리
      </div>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(../../public/bg.png)`,
        }}
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white font-bold">
          <div>{curDate}</div>
          <div className="mt-4">{curTime}</div>
          <button className="text-black rounded-3xl h-[115px] w-[400px] py-0 mt-[150px]">
            출석 / 퇴근
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
