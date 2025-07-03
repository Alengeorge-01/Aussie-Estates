import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function saveGame(roomId: string, state: any) {
  await redis.set(`lr:${roomId}`, JSON.stringify(state));
}

export async function loadGame(roomId: string) {
  const data = await redis.get(`lr:${roomId}`);
  if (!data) return null;
  return JSON.parse(data);
}
