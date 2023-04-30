import CandidateList from '../components/CandidateList';
import Camera from '../components/ShowCam';
import { useTime } from '../hooks/useTime';

const FaceID = () => {
  const { curTime, curDate } = useTime();
  return (
    <div
      className="flex w-full h-full text-5xl justify-items-center"
      style={{
        backgroundImage: `url(/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
      <div className="flex h-full w-[30%] items-center font-bold z-20">
        <div className="w-full z-10 text-[#463635]">
          <div className="leading-relaxed">{curDate}</div>
          <div className="leading-relaxed">{curTime}</div>
        </div>
      </div>
      <div className="flex h-full w-[40%] items-center justify-center z-20">
        <Camera />
      </div>
      <div className="flex h-full w-[30%] items-center justify-center z-20">
        <CandidateList />
      </div>
    </div>
  );
};

export default FaceID;
