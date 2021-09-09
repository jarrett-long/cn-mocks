import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charity Navigator - Home</title>
        <meta name="description" content="Charity Navigator rebuild prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <a href='/profile'>Go Here</a>
      </div>
    </>
  );
}
