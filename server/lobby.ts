import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { loadGame, saveGame } from './save';

const router = Router();

router.post('/api/room', async (req, res) => {
  const roomId = uuid().slice(0, 6);
  const playerId = uuid();
  await saveGame(roomId, null);
  res.json({ roomId, playerId });
});

router.get('/api/resume', async (req, res) => {
  const roomId = req.query.room as string;
  const state = await loadGame(roomId);
  res.json(state);
});

export default router;
