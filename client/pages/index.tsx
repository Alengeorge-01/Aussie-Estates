import React from 'react';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Aussie Estates</h1>
      <p>Create or join a lobby to begin.</p>
    </div>
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aussie Estates</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Aussie Estates</h1>
      </main>
    </>
  );
}
