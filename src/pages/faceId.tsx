import { css } from '@emotion/css';
import Background from '../components/Background';
import CandidateList from '../components/CandidateList';
import Camera from '../components/ShowCam';
import { useTime } from '../hooks/useTime';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';

const FaceID = () => {
  const { curTime, curDate } = useTime();
  const [socket, disconnect] = useSocket('faceId');
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setCandidate(data);
      };
    }
    // return () => disconnect();
  }, [socket]);

  return (
    <>
      <Background bgURL="/bg.png" />
      <TransparentBG />
      <Container>
        <SideContainer>
          <TimeContainer>
            <div className="leading-relaxed">{curDate}</div>
            <div className="leading-relaxed">{curTime}</div>
          </TimeContainer>
        </SideContainer>
        <CameraContainer>
          <Camera socket={socket} />
        </CameraContainer>
        <SideContainer>
          <CandidateList />
        </SideContainer>
      </Container>
    </>
  );
};

export default FaceID;

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  z-index: 30;
  justify-content: center;
  align-items: center;
`;

const TransparentBG = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.1;
  z-index: 5;
`;

const ContainerCSS = css`
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 700;
`;

const SideContainer = styled.div`
  ${ContainerCSS};
  width: 27%;
`;

const CameraContainer = styled.div`
  ${ContainerCSS};
  width: 46%;
`;

const TimeContainer = styled.div`
  width: 100%;
  z-index: 10;
  font-weight: 700;
  color: #463535;
`;
