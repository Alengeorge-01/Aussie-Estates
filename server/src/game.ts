export interface Player {
  id: string;
  name: string;
}

export class Game {
  private players: Player[] = [];

  addPlayer(player: Player) {
    this.players.push(player);
  }

  listPlayers() {
    return this.players;
  }
}
