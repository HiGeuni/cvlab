import CandidateList from '../components/CandidateList';
import { useTime } from '../hooks/useTime';

const FaceID = () => {
  const { curTime, curDate, isPM } = useTime();
  return (
    <div
      className="flex w-full h-full text-5xl justify-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(../../bg.png)`,
      }}
    >
      <div className="flex h-full w-1/4 items-center font-bold">
        <div className="w-full">
          <div className="leading-relaxed">{curDate}</div>
          <div className="leading-relaxed">{curTime}</div>
        </div>
      </div>
      <div className="flex h-full w-2/4 items-center ">
        <div className="w-full h-[900px] bg-slate-500">{/* 카메라 연결 */}</div>
      </div>
      <div className="flex h-full w-1/4 items-center ">
        <div className="w-full">
          <CandidateList />
        </div>
      </div>
    </div>
  );
};
export default FaceID;
