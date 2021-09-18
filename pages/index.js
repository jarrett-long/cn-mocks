import {
  Card, CardContent, Divider, Grid, Stack, Typography
} from "@mui/material";
import Head from "next/head";
import Link from "../components/Link/Link";
import { NewsHero } from "../components/NewsHero/NewsHero";

export default function Home() {
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
      <Divider variant="middle" />
      <Grid container>
        <Grid item xs={4} sx={{ gap: 2, mt: 2, mb: 2, pr: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Tips for Donors
          </Typography>
          <Stack spacing={2}>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ gap: 2, mt: 2, mb: 2, pr: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Top 10 Lists
          </Typography>
          <Stack spacing={2}>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mr: 2 }}>
                  10
                </Typography>
                <Link href="/">
                  <Typography>Most Frequently Viewed Charities</Typography>
                </Link>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ gap: 2, mt: 2, mb: 2, pr: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Blog
          </Typography>
          <Stack spacing={2}>
            <Card>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <Link href="/">
                <CardContent>
                  <Typography>
                    Avoiding Charity Scams: Questions to ask and ways to give
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
