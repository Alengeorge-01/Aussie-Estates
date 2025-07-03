import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import Board from '../../components/Board';
import Sidebar from '../../components/Sidebar';
import BottomSheet from '../../components/BottomSheet';
import { AussieGame } from '../../../server/game';

export default function PlayRoom() {
  const router = useRouter();
  const { room } = router.query;
  const [initialState, setInitialState] = useState<any>(null);

  useEffect(() => {
    if (!room) return;
    fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomId: room }),
    })
      .then((res) => res.json())
      .then((data) => setInitialState(data));
  }, [room]);

  const GameClient = useMemo(() => {
    if (!room) return null;
    return Client({
      game: AussieGame,
      board: Board,
      multiplayer: SocketIO({
        server: process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4001',
      }),
      initialState,
    });
  }, [room, initialState]);

  if (!GameClient || !room) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row p-4">
      <GameClient matchID={room as string} />
      <div className="hidden md:block ml-4">
        <Sidebar />
      </div>
      <div className="md:hidden mt-4">
        <BottomSheet />
      </div>
    </div>
  );
}

