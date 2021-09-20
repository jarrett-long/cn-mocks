import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "../components/Link/Link";
import { NewsHero } from "../components/News/NewsHero";
import { QuickList } from "../components/QuickList/QuickList";

export default function Home() {
  const tipsForDonors = [
    {
      title:
        "Avoiding Charity Scams: Questions to ask and ways to give",
      link: "/",
    },
    {
      title:
        "Avoiding Charity Scams: Questions to ask and ways to give",
      link: "/",
    },
    {
      title:
        "Avoiding Charity Scams: Questions to ask and ways to give",
      link: "/",
    },
    {
      title:
        "Avoiding Charity Scams: Questions to ask and ways to give",
      link: "/",
    },
  ];

  const blog = [
    {
      title: "Best things to do with your money.",
      link: "/",
    },
    {
      title: "Best things to do with your money.",
      link: "/",
    },
    {
      title: "Best things to do with your money.",
      link: "/",
    },
    {
      title: "Best things to do with your money.",
      link: "/",
    },
  ];

  const top10Lists = [

  ]


  return (
    <>
      <Head>
        <title>Charity Navigator - Home</title>
        <meta
          name="description"
          content="Charity Navigator rebuild prototype"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsHero />
      <Divider variant="fullWidth" />
      <Grid container>
        <QuickList
          title="Tips for Donors"
          cards={tipsForDonors}
        />

        <QuickList
          title="Blog"
          cards={blog}
        />
      </Grid>
    </>
  );
}
