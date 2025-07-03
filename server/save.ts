import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export class RedisUnavailableError extends Error {
  constructor(message = 'Redis is unavailable') {
    super(message);
    this.name = 'RedisUnavailableError';
  }
}

export async function saveGame(roomId: string, state: any) {
  try {
    await redis.set(`lr:${roomId}`, JSON.stringify(state));
  } catch (err) {
    console.error(`Failed to save game for room ${roomId}`, err);
    throw new RedisUnavailableError();
  }
}

export async function loadGame(roomId: string) {
  try {
    const data = await redis.get(`lr:${roomId}`);
    if (!data) return null;
    return JSON.parse(data);
  } catch (err) {
    console.error(`Failed to load game for room ${roomId}`, err);
    throw new RedisUnavailableError();
  }
}
