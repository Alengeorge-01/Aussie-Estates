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
  const [saved, setSaved] = useState<any>(null);

  useEffect(() => {
    if (!room) return;
    fetch(`/api/resume?room=${room}`)
      .then((res) => res.json())
      .then((data) => setSaved(data));
  }, [room]);

  const GameClient = useMemo(() => {
    if (!room) return null;
    return Client({
      game: AussieGame,
      board: Board,
      multiplayer: SocketIO({ server: 'http://localhost:4001' }),
    });
  }, [room]);

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

