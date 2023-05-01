import { useEffect, useState } from 'react';
import { useTime } from '../hooks/useTime';
import { AMStyle, PMStyle, themeStyle } from '../styles/theme';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import MainLabel from '../components/MainLabel';
import HomeComponent from '../components/Home';

const Home = () => {
  // const { curTime, curDate, isPM } = useTime();
  const { curTime, curDate } = useTime();
  const isPM = true;
  const [curStyle, setCurStyle] = useState<string>(isPM ? 'PM' : 'AM');
  const [bgURL, setBgURL] = useState(isPM ? '/pm.png' : '/am.png');

  useEffect(() => {
    setCurStyle(isPM ? 'PM' : 'AM');
    setBgURL(isPM ? '/pm.png' : '/am.png');
  }, [isPM]);

  return (
    <>
      <MainLabel isPM={isPM} />
      <Background bgURL={bgURL} />
      <HomeComponent isPM={isPM} curTime={curTime} curDate={curDate} />
    </>
  );
};

export default Home;
