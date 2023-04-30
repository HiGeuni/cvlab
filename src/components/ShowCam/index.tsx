import { useEffect, useRef } from 'react';

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
      <video ref={videoRef} width="100%" autoPlay></video>
    </div>
  );
}

export default Camera;
