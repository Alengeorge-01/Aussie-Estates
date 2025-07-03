# Aussie Estates

This repository contains the source code for **Aussie Estates**, a multiplayer Australian property trading game. The project uses Next.js with TypeScript on the client and a Node server powered by boardgame.io.

Due to the restricted environment no npm dependencies are installed. The file tree and basic TypeScript scaffolding are provided so the project can be set up in a full development environment.

## Getting Started

1. Install dependencies once network access is available:

```bash
pnpm install
```

2. Start the Next.js client:
```bash
pnpm run dev:client
```

3. Start the boardgame.io server in another terminal:
```bash
pnpm run dev:server
```

4. You can also run both with:
```bash
pnpm run dev
```

The client will start on `localhost:3000` and the game server on `localhost:4000` by default.

This repository contains a basic Next.js project with TypeScript and Tailwind CSS.

## Directories

- `client/` – Next.js application.
- `server/` – Express server with simple lobby API.

Environment examples can be found in `.env.example`, `client/.env.example`, and `server/.env.example`.


This repository contains a minimal boardgame.io configuration for an Australian-themed property trading game. It demonstrates a simple setup with two phases:

- **Buy** – players can roll dice and purchase the property they land on.
- **EndGame** – triggered after 20 turns, awarding victory to the richest player.

See `server/game/index.ts` for the implementation.


## Project Goals

- Experiment with server‑side rendering and API routes.
- Deploy to both Vercel (frontend) and Railway (backend/database).

## Tech Stack

- **Next.js** with **React** for the frontend
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Node.js** and **Express** API routes

## Setup

1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url>
   cd Aussie-Estates
   npm install
   ```
2. Copy the example `.env` files from `client/` and `server/` and provide values. The server uses `REDIS_URL` to connect to Redis (default `redis://localhost:6379`).

3. Run the seed script to generate initial board data:
   ```bash
   pnpm run seed
   ```
## Development

Start the Next.js client:
```bash
pnpm run dev:client
```

Start the boardgame.io server in another terminal:
```bash
pnpm run dev:server
```

You can run both at once with:
```bash
pnpm run dev
```

The client is served at http://localhost:3000 and the server on http://localhost:4000.
## Production Build

Create a production build and start the server:
```bash
npm run build
npm start
```
The application will run in optimized production mode.

## Deployment

### Vercel

- Connect the GitHub repository to Vercel.
- Set the environment variables from your `.env` file in the Vercel dashboard.
- Vercel will automatically build and deploy on every push to `main`.

### Railway

- Optionally deploy the backend API if you split it from the Next.js frontend.

## License

This project is provided for demonstration purposes.

