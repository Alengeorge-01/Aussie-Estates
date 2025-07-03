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
