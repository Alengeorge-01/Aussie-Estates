import express from 'express';
import { Game, Player } from './game';

const game = new Game();
const router = express.Router();

router.post('/join', (req, res) => {
  const player: Player = req.body;
  game.addPlayer(player);
  res.json({ ok: true });
});

router.get('/players', (req, res) => {
  res.json(game.listPlayers());
});

export default router;
