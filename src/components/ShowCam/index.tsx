import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

function Camera({ socket }: { socket: any }): JSX.Element {
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
    // 컴포넌트가 unmount 될 때 srcObject를 null로 설정
    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [videoRef]);

  useEffect(() => {
    if (videoRef.current && socket) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const sendFrame = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            socket.send(blob);
          }
        }, 'image/jpeg');
        setTimeout(sendFrame, 100);
      };

      sendFrame();
    }
  }, [socket, videoRef]);

  const SendMessageToServer = () => {
    socket?.send("{ value: 'asdf' }");
  };

  return (
    <div>
      <StyledVideo ref={videoRef} width="100%" autoPlay></StyledVideo>
    </div>
  );
}

export default Camera;

const StyledVideo = styled.video`
  transform: scaleX(-1);
`;
