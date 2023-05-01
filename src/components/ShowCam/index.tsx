import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const StyledVideo = styled.video`
  transform: scaleX(-1);
`;

function Camera(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch(function (err) {
          console.log('Error: ' + err);
        });
    }
  }, [videoRef]);

  return (
    <div>
      <StyledVideo ref={videoRef} width="100%" autoPlay></StyledVideo>
    </div>
  );
}

export default Camera;
