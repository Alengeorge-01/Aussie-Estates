import board from '../data/board.json';
import { GameState } from './types';

export function setup(): GameState {
  return {
    board,
    players: [],
    lastRoll: 0,
  };
}
