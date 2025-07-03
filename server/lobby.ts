import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { loadGame, saveGame } from './save';

export interface Player {
  id: string;
  name: string;
}

class Game {
  private players: Player[] = [];

  addPlayer(player: Player) {
    this.players.push(player);
  }

  listPlayers() {
    return this.players;
  }
}

const lobbyGame = new Game();
const router = Router();

router.post('/lobby/join', (req, res) => {
  const player: Player = req.body;
  lobbyGame.addPlayer(player);
  res.json({ ok: true });
});

router.get('/lobby/players', (_req, res) => {
  res.json(lobbyGame.listPlayers());
});

router.post('/room', async (req, res) => {
  const roomId = uuid().slice(0, 6);
  const playerId = uuid();
  await saveGame(roomId, null);
  res.json({ roomId, playerId });
});

router.get('/resume', async (req, res) => {
  const roomId = req.query.room as string;
  const state = await loadGame(roomId);
  res.json(state);
});

export default router;
