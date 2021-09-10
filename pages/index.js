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
        <h1>Mock Charity Navigator site</h1>
        <p>This is a re-design of <a href="https://www.charitynavigator.org">charitynavigator.org</a> that I'm doing for fun.</p>
      </div>
    </>
  );
}
