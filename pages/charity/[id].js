import Head from "next/head";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { charities } from '../api/charities';

export default function Charity() {
  const router = useRouter();
  const { id } = router.query;
  const [charity, setCharity] = useState();
  useEffect(() => {
    setCharity(charities.find(c => c.id == id));
  });

  if (!charity) return <></>;
  
  return (
    <>
      <Head>
        <title>Charity</title>
        <meta name="description" content="Charity Navigator rebuild prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{charity.title}</h1>
      </div>
    </>
  );
}
