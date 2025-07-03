import { Game, TurnOrder } from 'boardgame.io';
import { GameState } from './types';
import { setup } from './setup';
import * as moves from './moves';

export const AussieGame: Game<GameState> = {
  setup,
  moves,
  turn: {
    order: TurnOrder.DEFAULT,
  },
  phases: {
    Main: {},
    Auction: {},
    Trade: {},
  },
  endIf: (G, ctx) => {
    const winner = G.players.reduce((a, b) => (a.cash > b.cash ? a : b));
    return { winner: winner.id };
  },
};
import { Game, TurnOrder, INVALID_MOVE } from 'boardgame.io';

export interface Property {
  price: number;
  owner: string | null;
}

export interface PlayerState {
  position: number;
  cash: number;
  properties: number[];
}

export interface GameState {
  players: Record<string, PlayerState>;
  properties: Property[];
  turn: number;
  gameOver: boolean;
}

const boardSize = 10;
const propertyPrice = 100;

export const AussieGame: Game<GameState> = {
  setup: ({ ctx }) => {
    const properties: Property[] = Array.from({ length: boardSize }, () => ({
      price: propertyPrice,
      owner: null,
    }));
    const players: Record<string, PlayerState> = {};
    for (let i = 0; i < ctx.numPlayers; i++) {
      players[i.toString()] = { position: 0, cash: 1500, properties: [] };
    }
    return { players, properties, turn: 0, gameOver: false };
  },

  turn: {
    order: TurnOrder.DEFAULT,
  },

  phases: {
    Buy: {
      start: true,
      moves: { rollDice, buyProperty },
      endIf: (G) => (G.gameOver ? true : undefined),
      onEnd: (G) => {
        G.turn++;
        if (G.turn >= 20) {
          G.gameOver = true;
        }
      },
    },
    EndGame: {
      moves: {},
      start: false,
      onBegin: () => {},
    },
  },

  endIf: (G) => (G.gameOver ? { winner: highestCash(G) } : undefined),
};

function rollDice(G: GameState, ctx: any) {
  const player = G.players[ctx.currentPlayer];
  const dice = ctx.random.D6();
  player.position = (player.position + dice) % boardSize;
}

function buyProperty(G: GameState, ctx: any) {
  const player = G.players[ctx.currentPlayer];
  const property = G.properties[player.position];
  if (property.owner !== null) {
    return INVALID_MOVE;
  }
  if (player.cash < property.price) {
    return INVALID_MOVE;
  }
  property.owner = ctx.currentPlayer;
  player.cash -= property.price;
  player.properties.push(player.position);
}

function highestCash(G: GameState) {
  let winner = null;
  let maxCash = -Infinity;
  for (const id in G.players) {
    const cash = G.players[id].cash;
    if (cash > maxCash) {
      maxCash = cash;
      winner = id;
    }
  }
  return winner;
}

export default AussieGame;
