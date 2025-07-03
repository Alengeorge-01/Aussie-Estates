import boardData from '../data/board.json';
import { GameState, Property } from './types';

export function setup(): GameState {
  const board: Property[] = boardData as Property[];
  return {
    board,
    players: [],
    lastRoll: 0,
  };
}
