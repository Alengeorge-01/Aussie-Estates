# Aussie Estates

This repository contains the source code for **Aussie Estates**, a multiplayer Australian property trading game. The project uses Next.js with TypeScript on the client and a Node server powered by boardgame.io.

Due to the restricted environment no npm dependencies are installed. The file tree and basic TypeScript scaffolding are provided so the project can be set up in a full development environment.

## Getting Started

1. Install dependencies once network access is available:

```bash
pnpm install
```

2. Run the development servers:

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

Aussie Estates is a real estate listing platform. The project showcases modern web development practices and serves as a playground for deploying full‑stack applications.

## Project Goals

- Provide a simple property catalogue that users can browse.
- Experiment with server‑side rendering and API routes.
- Deploy to both Vercel (frontend) and Railway (backend/database).

## Tech Stack

- **Next.js** with **React** for the frontend
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Node.js** and **Express** API routes
- **Prisma** ORM with **PostgreSQL**

## Setup

1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url>
   cd Aussie-Estates
   npm install
   ```
2. Create an `.env` file and provide the following variables:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/aussie_estates
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
3. (Optional) start a local PostgreSQL instance or configure Railway.

## Development

Run the development server with hot reloading:
```bash
npm run dev
```
Open <http://localhost:3000> in your browser.

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

- Create a PostgreSQL database in Railway.
- Add the `DATABASE_URL` provided by Railway to your environment variables.
- Optionally deploy the backend API if you split it from the Next.js frontend.

## License

This project is provided for demonstration purposes.

