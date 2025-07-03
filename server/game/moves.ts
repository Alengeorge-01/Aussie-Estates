import { Ctx } from 'boardgame.io';
import { GameState } from './types';

export function rollDice(G: GameState, ctx: Ctx) {
  const roll = ctx.random!.D6() + ctx.random!.D6();
  G.lastRoll = roll;
}

export function buyProperty(G: GameState, ctx: Ctx) {
  // placeholder
}

export function startAuction(G: GameState, ctx: Ctx) {
  ctx.events?.setPhase('Auction');
}

export function bid(G: GameState, ctx: Ctx, amount: number) {
  // placeholder
}

export function endTurn(G: GameState, ctx: Ctx) {
  ctx.events?.endTurn();
}
