export async function fetchPlayers() {
  const res = await fetch('/api/lobby/players');
  return res.json();
}
