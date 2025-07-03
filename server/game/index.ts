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
