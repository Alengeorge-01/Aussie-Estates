export interface PlayerState {
  id: string;
  cash: number;
}

export interface Property {
  id: string;
  name: string;
  price?: number;
  type: string;
  colour?: string;
  rent?: number[];
}

export interface GameState {
  board: Property[];
  players: PlayerState[];
  lastRoll: number;
}
