import { Game, TurnOrder } from 'boardgame.io';
import { GameState } from './types';
import { setup } from './setup';
import * as moves from './moves';

function highestCash(G: GameState) {
  let winner = '';
  let maxCash = -Infinity;
  for (const player of G.players) {
    if (player.cash > maxCash) {
      maxCash = player.cash;
      winner = player.id;
    }
  }
  return winner;
}

export const AussieGame: Game<GameState> = {
  setup,
  moves,
  turn: {
    order: TurnOrder.DEFAULT,
  },
  phases: {
    Buy: {
      start: true,
      endIf: (_G, ctx) => (ctx.turn >= 20 ? true : undefined),
      next: 'EndGame',
    },
    EndGame: {},
  },
  endIf: (_G, ctx) => (ctx.turn >= 20 ? { winner: highestCash(_G) } : undefined),
};
