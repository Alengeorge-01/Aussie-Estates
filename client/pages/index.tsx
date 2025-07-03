import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aussie Estates</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Welcome to Aussie Estates</h1>
        <p className="mt-2">Create or join a lobby to begin.</p>
      </main>
    </>
  );
}

