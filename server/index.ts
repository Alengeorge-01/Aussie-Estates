import express from 'express';
import { Server } from 'boardgame.io/server';
import { AussieGame } from './game';
import lobbyRouter from './lobby';

const app = express();
app.use(express.json());
app.use(lobbyRouter);

const server = Server({
  games: [AussieGame],
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

server.run(PORT + 1);
import lobbyRouter from './src/lobby';

const app = express();
app.use(express.json());
app.use('/api/lobby', lobbyRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on ${port}`));
