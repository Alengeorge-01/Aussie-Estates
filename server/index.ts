import express from 'express';
import { Server } from 'boardgame.io/server';
import { AussieGame } from './game';
import lobbyRouter from './lobby';

const app = express();
app.use(express.json());
app.use('/api', lobbyRouter);

const boardGameServer = Server({
  games: [AussieGame],
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

boardGameServer.run(port + 1);
