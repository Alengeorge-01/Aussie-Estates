import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { loadGame, saveGame, RedisUnavailableError } from './save';

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
  try {
    await saveGame(roomId, null);
  } catch (err) {
    if (err instanceof RedisUnavailableError) {
      console.error('Unable to create room', err);
      return res.status(503).json({ error: 'Redis unavailable' });
    }
    throw err;
  }
  res.json({ roomId, playerId });
});

router.post('/resume', async (req, res) => {
  const { roomId } = req.body as { roomId: string };
  try {
    const state = await loadGame(roomId);
    return res.json(state);
  } catch (err) {
    if (err instanceof RedisUnavailableError) {
      console.error('Unable to load game', err);
      return res.status(503).json({ error: 'Redis unavailable' });
    }
    throw err;
  }
});

export default router;
