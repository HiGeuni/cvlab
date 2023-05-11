import { useCallback } from 'react';

const backUrl = 'ws://localhost:8000';

const sockets: { [key: string]: WebSocket } = {};

const useSocket = (workspace?: string): [WebSocket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace && sockets[workspace]) {
      console.log('소켓 연결 끊음');
      sockets[workspace].close();
      delete sockets[workspace];
    }
  }, [workspace]);
  if (!workspace) {
    return [undefined, disconnect];
  }
  if (!sockets[workspace]) {
    sockets[workspace] = new WebSocket(`${backUrl}/ws/chat/faceId/`);
    console.info('create socket', workspace, sockets[workspace]);

    sockets[workspace].onopen = function (e) {
      console.log('Socket connection established.');
    };

    sockets[workspace].addEventListener('error', (err) => {
      console.error(err);
      console.log(`connect_error due to ${err.message}`);
    });
  }

  return [sockets[workspace], disconnect];
};

export default useSocket;
