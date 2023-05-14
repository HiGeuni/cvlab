import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const INTERVAL = 100; // 0.1ms

function Camera(): JSX.Element {
  const [image, setImage] = useState('');
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
    const intervalId = setInterval(() => {
      if (videoRef.current) {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current?.videoWidth ?? 0;
        canvas.height = videoRef.current?.videoHeight ?? 0;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          const formData = new FormData();
          formData.append('image', blob, 'image.png');
          axios
            .post('http://localhost:8000/attendance/face_recognition', formData)
            .then((response) => {
              console.log('Image uploaded successfully!');
            });
        }, 'image/png');
      }
    }, INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [image, videoRef]);

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
