import express from 'express';
import lobbyRouter from './src/lobby';

const app = express();
app.use(express.json());
app.use('/api/lobby', lobbyRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on ${port}`));
