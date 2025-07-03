export interface PlayerState {
  id: string;
  cash: number;
}

export interface Property {
  id: string;
  name: string;
  price: number;
}

export interface GameState {
  board: Property[];
  players: PlayerState[];
  lastRoll: number;
}
